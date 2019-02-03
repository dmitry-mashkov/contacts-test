import { Component, OnInit } from '@angular/core';
import { find } from 'lodash/fp';

import { Contact } from '../../types/contact.type';
import { ContactService } from '../../services/contact/contact.service';
import { ContactInteractive } from '../contacts-list/contact-interactive.type';
import { ModesEnum } from '../../enums/modes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  contacts: Contact[];
  activeContact: ContactInteractive;
  mode = ModesEnum.View;

  constructor(private contactService: ContactService) {
  }

  get isRemoveAllowed() {
    return this.mode === ModesEnum.Edit;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onContactItemSelect(contact: ContactInteractive) {
    this.makeContactActive(contact);
    this.mode = ModesEnum.View;
  }

  onEditClick() {
    this.mode = ModesEnum.Edit;
  }

  onContactUpdate(contact: Contact) {
    this.contactService.updateContact(this.activeContact, contact);
    this.refreshList();
  }

  onAddClick() {
    this.mode = ModesEnum.Add;
  }

  onContactCreate(contact: Contact) {
    this.contactService.createContact(contact);
    this.refreshList();
    this.makeContactActive(contact as ContactInteractive);
  }

  private makeContactActive(contact: ContactInteractive) {
    const activeContact: ContactInteractive = find('isActive')(this.contacts);
    if (activeContact) {
      activeContact.isActive = false;
    }

    contact.isActive = true;
    this.activeContact = contact;
  }

  private refreshList() {
    this.contacts = this.contactService.getContacts();
    this.mode = ModesEnum.View;
  }
}
