import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../../types/contact.type';

@Pipe({
  name: 'contactName'
})
export class ContactNamePipe implements PipeTransform {

  transform(contact: Contact, args?: any): any {
    if (!contact) {
      return '';
    }

    const {firstName, lastName} = contact;
    return `${firstName} ${lastName}`;
  }

}
