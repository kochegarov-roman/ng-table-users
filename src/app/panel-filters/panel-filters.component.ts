import {Component, Input, OnInit} from '@angular/core';
import {PanelFiltersService} from './panel-filters.service';
import {OptionsInsertedCounterType, OwnOptionsFilterType} from '../../shared/types';




@Component({
  selector: 'app-panel-filters',
  templateUrl: './panel-filters.component.html',
  styleUrls: ['./panel-filters.component.scss']
})
export class PanelFiltersComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() optionsInsertedCounter: OptionsInsertedCounterType;
  @Input() ownFilters: OwnOptionsFilterType = {};

  constructor(public panelFiltersService: PanelFiltersService) {
  }

  ngOnInit(): void {
    this.panelFiltersService.initPanel(this.options, this.optionsInsertedCounter);
  }

  isChecked(option): any{
    return this.panelFiltersService.activeFilters$.getValue()[`${option.name}-${option.value}`];
  }

  toggleActiveFilters(option): any{
    const exist = this.panelFiltersService.activeFilters$.getValue()[`${option.name}-${option.value}`];
    !exist ?
      this.panelFiltersService.setActiveFilters({
        name: option.name,
        value: option.value,
        ownFilter: this.ownFilters[option.name]}
      )
    : this.panelFiltersService.deleteFilterFromActive({
      name: option.name,
      value: option.value});
  }
}
