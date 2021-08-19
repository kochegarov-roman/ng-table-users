import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {HeadersParamsType, UserInterface} from '../../shared/types';
import {TableService} from './table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  subscription: Subscription = null;
  @Input() headersParams: HeadersParamsType<UserInterface>;
  @Input() dataTable$: Subject<Array<UserInterface>> = new Subject();
  constructor(public tableService: TableService<UserInterface>) {
  }

  ngOnInit(): void {
    this.subscription = this.dataTable$.pipe().subscribe(
      (data) => data.length && this.tableService.initData(data, this.headersParams)
    );
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  setSorted(param: any): any{
    this.tableService.setSortedParam(param);
  }

}
