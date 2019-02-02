import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ContactInteractive } from './contact-interactive.type';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: ContactInteractive[];
  @Output() contactSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.contacts) {
      this.contactSelect.emit(this.contacts[1]);
    }
  }

  onContactClick(contact: ContactInteractive) {
    this.contactSelect.emit(contact);
  }
}
