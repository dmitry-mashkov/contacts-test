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

  transform(contacts?: Contact[], args?: any): ContactGroup[] {
    if (!contacts) return [];

    const sortedContacts = sortBy('lastName')(contacts);
    const contactGroups = groupBy(flow([
      get('lastName'),
      first
    ]))(sortedContacts);

    const contactGroupsList = _map((contacts, abbreviation) => ({ abbreviation, contacts }))(contactGroups);

    return contactGroupsList;
  }

}
