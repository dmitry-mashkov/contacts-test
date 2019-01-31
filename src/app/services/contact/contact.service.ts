import { Injectable } from '@angular/core';

import contacts from './contacts.stub';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts() {
    return contacts;
  }
}
