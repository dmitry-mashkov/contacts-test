import { Injectable } from '@angular/core';

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
}
