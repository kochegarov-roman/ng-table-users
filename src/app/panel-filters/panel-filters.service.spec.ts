import { TestBed } from '@angular/core/testing';

import { PanelFiltersService } from './panel-filters.service';
import {AppComponent} from '../app.component';

describe('PanelFiltersService', () => {
  let service: PanelFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
