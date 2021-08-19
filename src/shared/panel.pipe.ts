import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'sortByCountValue', pure: false})
export class SortByCountValue implements PipeTransform {
  transform(value): any {
    return value.sort((a, b) => a.value >= b.value ? -1 : 1
    );
  }
}
