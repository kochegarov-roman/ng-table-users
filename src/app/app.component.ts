import {Component, OnDestroy, OnInit} from '@angular/core';

import {BehaviorSubject, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AddressInterface, HeadersParamsType, UserInterface} from '../shared/types';


const addressTransform = (address: AddressInterface) => `${address.city}, ${address.street}`;
const genderUppercase = (gender: string) => gender.toLocaleUpperCase();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'table-user';
  public uri = 'https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json';
  info$: BehaviorSubject<Array<UserInterface>> = new BehaviorSubject([]);

  public headersParams: HeadersParamsType<UserInterface> = {
    name: {visibility: true, hideColumnSm: false, withPipe: false},
    age: {visibility: true, hideColumnSm: false, withPipe: false},
    gender: {visibility: true, hideColumnSm: false, withPipe: true, pipeFunc: genderUppercase},
    department: {visibility: true, hideColumnSm: false, withPipe: false},
    address: {visibility: true, hideColumnSm: true, withPipe: true, pipeFunc: addressTransform},
  };

  isError: any = false;
  isFetching = false;

  public optionsFilter = ['gender', 'department', 'city'];
  public optionsInsertedCounter = {
    city: (el) => el.address.city
  };

  subscription: Subscription = null;

  ownOptionFilters = {
    city(el): boolean {
      return String(this.value).toLowerCase() === el.address.city.toLowerCase();
    }
  };

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.isFetching = true;
    this.subscription = this.fetchTable();
  }

  ngOnDestroy(): void {
    if (this.subscription !== null) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  fetchTable(): Subscription {
    return this.http.get<Array<UserInterface>>(this.uri).subscribe((resp: any) => {
      this.info$.next(resp);
    }, (error) => {
      this.isError = error;
      this.isFetching = false;
    }, () => {
      this.isFetching = false;
    });
  }
}
