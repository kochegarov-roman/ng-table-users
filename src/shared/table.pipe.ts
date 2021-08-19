import {Pipe, PipeTransform} from '@angular/core';
import {HeadersParamsType, UserInterface} from './types';


@Pipe({name: 'transformField'})
export class TransformField implements PipeTransform {
  transform(value, func): string {
    return func(value);
  }
}

@Pipe({name: 'visibilityHeaders'})
export class VisibilityHeaders implements PipeTransform {
  transform(value: HeadersParamsType<UserInterface>): string[] {
    const headers = Object.entries(value).reduce((acc, cur) => cur[1].visibility && acc.concat([cur[0]]), []);
    return headers;
  }
}
