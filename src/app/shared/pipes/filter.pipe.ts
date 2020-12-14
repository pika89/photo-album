import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    // I am unsure what id is here. did you mean title?
    if (!term) {
      return items;
    }

    return items.filter(item => item.title.indexOf(term) !== -1);
  }

}
