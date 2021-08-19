import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<Data> {

  info$: BehaviorSubject<Array<Data>> = new BehaviorSubject([]);
  constructor() { }
}
