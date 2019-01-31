import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../../../types/contact.type';

@Component({
  selector: 'app-contacts-list-item',
  templateUrl: './contacts-list-item.component.html',
  styleUrls: ['./contacts-list-item.component.scss']
})
export class ContactsListItemComponent implements OnInit {
  @Input() contact: Contact;

  constructor() {
  }

  get name() {
    if (!this.contact) return '';

    const {firstName, lastName} = this.contact;
    return `${firstName} ${lastName}`
  }

  ngOnInit() {
  }

}
