import { Injectable } from '@angular/core';
import { pull } from 'lodash/fp';

import contacts from './contacts.stub';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts = contacts;

  constructor() { }

  getContacts() {
    return [...this.contacts];
  }

  updateContact(contact, data) {
    Object.assign(contact, data);
  }

  createContact(contact) {
    this.contacts.push(contact);
  }

  removeContact(contact) {
    this.contacts = pull(contact)(this.contacts);
  }
}
