import { Pipe, PipeTransform } from '@angular/core';
import {
  groupBy,
  flow,
  get,
  first,
  toPairs,
  sortBy,
  fromPairs,
  map
} from 'lodash/fp';

import { Contact } from '../../types/contact.type';

const _map = map.convert({cap: false});

@Pipe({
  name: 'contactGroup'
})
export class ContactGroupPipe implements PipeTransform {

  transform(contacts: Contact[], args?: any): any {
    if (!contacts) return contacts;

    const unsortedContactGroups = groupBy(flow([
      get('lastName'),
      first
    ]))(contacts);

    const sortedContactGroups = flow([
      toPairs,
      sortBy(0),
      fromPairs,
      _map((contacts, abbreviation) => ({ abbreviation, contacts }))
    ])(unsortedContactGroups);

    return sortedContactGroups;
  }

}
