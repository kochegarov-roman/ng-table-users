import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {PanelFiltersService} from '../panel-filters/panel-filters.service';
import {DataService} from '../../shared/data.service';
import {HeadersParamsType, SortedParamType} from '../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class TableService<Data> implements OnDestroy{

  public info: Array<Data> = [];
  public infoSortered = [];
  public infoFiltered: Array<Data> = [];

  private headersParams: HeadersParamsType<Data>;

  public sortedParam: any = {};
  subscription: Subscription = null;

  constructor(public panelFilterService: PanelFiltersService,
              public dataService: DataService<Data>) {
    this.subscription = this.panelFilterService.activeFilters$.pipe().subscribe((optionsFilter) => {
      this.info = this.infoFiltered;
      this.filtration(Object.values(optionsFilter));
      this.sortTable();
      dataService.info$.next(this.info);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  initData(data: Data[], headerParams): void {
    this.dataService.info$.next(data);
    this.info = data;
    this.infoFiltered = data;
    this.headersParams = headerParams;
  }


  sortTable(): any{
    this.info.sort((a, b) => {
      const param = Object.keys(this.sortedParam).pop();
      if (this.sortedParam[param] === 'ask') {
        return String(a[param]).toLowerCase() <= String(b[param]).toLowerCase() ? -1 : 1;
      }
      else {
        return String(a[param]).toLowerCase() >= String(b[param]).toLowerCase() ? -1 : 1;
      }
    });
  }

  filtration(optionsFilter): any{
    optionsFilter.forEach(
      activeFilter => {
        const callback = activeFilter.ownFilter ?
          activeFilter.ownFilter
          : ((item) => String(item[activeFilter.name]).toLowerCase() === activeFilter.value.toLowerCase());
        this.info = this.info.filter(callback, activeFilter);
      }
    );
  }

  setSortedParam(param: string): any{
    switch (this.sortedParam[param]){
      case undefined:
        // this.infoSortered = this.info.slice(0);
        this.sortedParam = {[param]: 'ask'};
        this.sortTable();
        break;
      case 'ask':
        this.sortedParam = {[param]: 'desk'};
        this.sortTable();
        break;
      case 'desk':
        // this.info = this.infoSortered.slice(0);
        delete this.sortedParam[param];
        break;
      default:
        break;
    }
    this.dataService.info$.next(this.info);
  }



}
