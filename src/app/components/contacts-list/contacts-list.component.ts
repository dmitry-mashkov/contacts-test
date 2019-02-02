import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ContactInteractive } from './contact-interactive.type';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: ContactInteractive[];
  @Input() isInEditMode: boolean;
  @Output() contactSelect = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    if (this.contacts) {
      this.contactSelect.emit(this.contacts[1]);
    }
  }

}
