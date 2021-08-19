import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntriesPipe, LengthPipe, ValuesPipe} from '../../shared/object.pipe';
import {SortByCountValue} from '../../shared/panel.pipe';

@NgModule({
  declarations: [EntriesPipe, ValuesPipe, LengthPipe, SortByCountValue],
  imports: [
    CommonModule,
  ],
  exports: [
    EntriesPipe,
    ValuesPipe, LengthPipe, SortByCountValue
  ]
})
export class PanelFiltersModule { }
