import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject, Subscription} from 'rxjs';
import {DataService} from '../../shared/data.service';
import {OptionsFilter, UserInterface} from '../../shared/types';


@Injectable({
  providedIn: 'root'
})
export class PanelFiltersService implements OnDestroy{

  activeFilters$: BehaviorSubject<OptionsFilter> = new BehaviorSubject({});
  subscription: Subscription = null;
  optionsData$: Subject<OptionsFilter> = new Subject();
  public options = [];
  public optionsInsertedCounter = {};

  constructor(public dataService: DataService<UserInterface>) {
    this.subscription = this.dataService.info$.pipe().subscribe((info) => {
      const optionsData = this.optionsDataInit();
      info.map(
        cur => {
          this.options.forEach(
            option => {
              const insertedParamOrParam =
                this.optionsInsertedCounter.hasOwnProperty(option) ?
                  this.optionsInsertedCounter[option](cur) : cur[option];

              optionsData[option][insertedParamOrParam] =
                optionsData[option][insertedParamOrParam] === undefined ? 1 : optionsData[option][insertedParamOrParam] + 1;
            }
          );
        }
      );
      this.optionsData$.next(optionsData);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  initPanel(options, optionsInsertedCounter): void{
    this.options = options;
    this.optionsInsertedCounter = optionsInsertedCounter;
  }

  optionsDataInit(): any{
    return this.options.reduce((acc, cur) => {
      acc[cur] = {};
      return acc;
    }, {});
  }

  setActiveFilters(option): any{
    const state = this.activeFilters$.value;
    state[`${option.name}-${option.value}`] = option;
    this.activeFilters$.next(state);
  }

  deleteFilterFromActive(option): any{
    const state = this.activeFilters$.value;
    delete state[`${option.name}-${option.value}`];
    this.activeFilters$.next(state);
  }

  clearFilters(): any{
    this.activeFilters$.next({});
  }
}
