import { Component, OnInit } from '@angular/core';
import { find, flow, first, get } from 'lodash/fp';

import { Contact } from '../../types/contact.type';
import { ContactService } from '../../services/contact/contact.service';
import { ContactInteractive } from '../contacts-list/contact-interactive.type';
import { ModesEnum } from '../../enums/modes.enum';
import { ContactGroupPipe } from '../../pipes/contact-group/contact-group.pipe';

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

  get contactGroups() {
    return new ContactGroupPipe().transform(this.contacts);
  }

  get firstContact() {
    return flow([
      first,
      get('contacts'),
      first
    ])(this.contactGroups);
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.makeContactActive(this.firstContact);
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

  onContactRemove(contact: ContactInteractive) {
    this.contactService.removeContact(contact);
    this.refreshList();
    this.makeContactActive(this.firstContact);
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
