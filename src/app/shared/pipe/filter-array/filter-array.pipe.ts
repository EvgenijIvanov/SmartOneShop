import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe<T> implements PipeTransform {

  transform(value: T[], key: string, isObject: boolean = true): T[] {
    return value.filter((elem: T) => {
      return (isObject && key) ? !(elem as any)[key] : elem
    });
  }

}
