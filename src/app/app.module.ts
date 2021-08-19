import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {HttpClientModule} from '@angular/common/http';
import {TableModule} from './table/table.module';
import { PanelFiltersComponent } from './panel-filters/panel-filters.component';
import {PanelFiltersModule} from './panel-filters/panel-filters.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PanelFiltersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    PanelFiltersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
