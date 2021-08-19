import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'entries', pure: false})
export class EntriesPipe implements PipeTransform {
  transform(value): any {
    return value ? Object.entries(value).map(
      // tslint:disable-next-line:no-shadowed-variable
      ([key, value]) => ({key, value})
    ) : null;
  }
}

@Pipe({name: 'values', pure: false})
export class ValuesPipe implements PipeTransform {
  transform(value): any {
    return value ? Object.values(value) : null;
  }
}

@Pipe({name: 'length', pure: false})
export class LengthPipe implements PipeTransform {
  transform(value): any {
    return value ? Object.keys(value).length : 0;
  }
}






