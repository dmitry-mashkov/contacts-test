import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactGroup'
})
export class ContactGroupPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('-- value');
    return value;

    /*return {
      abbreviation: 'A',
      contacts: [{

      }]
    };*/
  }

}
