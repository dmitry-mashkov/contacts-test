import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ContactInteractive } from './contact-interactive.type';
import { ContactGroup } from '../../types/contact-group.type';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  @Input() contactGroups: ContactGroup[];
  @Input() isRemoveAllowed: boolean;
  @Output() select = new EventEmitter<ContactInteractive>();
  @Output() remove = new EventEmitter<ContactInteractive>();
}
