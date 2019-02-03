import { Pipe, PipeTransform } from '@angular/core';
import {
  groupBy,
  flow,
  get,
  first,
  sortBy,
  map
} from 'lodash/fp';

import { Contact } from '../../types/contact.type';
import { ContactGroup } from '../../types/contact-group.type';

const _map = map.convert({cap: false});

@Pipe({
  name: 'contactGroup'
})
export class ContactGroupPipe implements PipeTransform {

  transform(contactList?: Contact[], args?: any): ContactGroup[] | undefined {
    if (!contactList) {
      return undefined;
    }

    const sortedContacts = sortBy('lastName')(contactList);
    const contactGroups = groupBy(flow([
      get('lastName'),
      first
    ]))(sortedContacts);

    const contactGroupsList = _map((contacts, abbreviation) => ({ abbreviation, contacts }))(contactGroups);

    return contactGroupsList;
  }

}
