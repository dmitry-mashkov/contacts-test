import { Component, OnInit } from '@angular/core';
import { find } from 'lodash/fp';

import { Contact } from '../../types/contact.type';
import { ContactService } from '../../services/contact/contact.service';
import { ContactInteractive } from '../contacts-list/contact-interactive.type';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  contacts: Contact[];
  activeContact: ContactInteractive;
  isInEditMode: boolean;

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts() as any;
  }

  onContactItemSelect(contact: ContactInteractive) {
    const activeContact: ContactInteractive = find('isActive')(this.contacts);
    if (activeContact) {
      activeContact.isActive = false;
    }

    contact.isActive = true;
    this.activeContact = contact;
  }

  onEditClick() {
    this.isInEditMode = true;
  }
}
