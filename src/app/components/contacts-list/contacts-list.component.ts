import { Component, OnInit, Input } from '@angular/core';
import { find } from 'lodash/fp';

import { ContactInteractive } from './contact-interactive.type';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: ContactInteractive[];

  constructor() {
  }

  ngOnInit() {
  }

  onContactClick(contact: ContactInteractive) {
    const activeContact: ContactInteractive = find('isActive')(this.contacts);
    if (activeContact) {
      activeContact.isActive = false;
    }

    contact.isActive = true;
  }
}
