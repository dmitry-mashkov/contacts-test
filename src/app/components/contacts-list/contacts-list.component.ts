import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { flow, first, get } from 'lodash/fp';

import { ContactInteractive } from './contact-interactive.type';
import { ContactGroupPipe } from '../../pipes/contact-group/contact-group.pipe';

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

  get contactGroups() {
    return new ContactGroupPipe().transform(this.contacts);
  }

  ngOnInit() {
    const contactGroups = this.contactGroups;

    if (this.contactGroups) {
      this.contactSelect.emit(flow([
        first,
        get('contacts'),
        first
      ])(contactGroups));
    }
  }
}
