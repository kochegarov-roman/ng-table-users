import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransformField, VisibilityHeaders} from '../../shared/table.pipe';



@NgModule({
  declarations: [
    TransformField, VisibilityHeaders
  ],
  exports: [
    TransformField, VisibilityHeaders
  ],
  imports: [
    CommonModule
  ]
})
export class TableModule { }
