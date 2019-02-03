import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { ContactInteractive } from '../../contact-interactive.type';

@Component({
  selector: 'app-contacts-list-item',
  templateUrl: './contacts-list-item.component.html',
  styleUrls: ['./contacts-list-item.component.scss']
})
export class ContactsListItemComponent {
  @Input() contact: ContactInteractive;
  @Input() isRemoveAllowed: boolean;
  @Output() select = new EventEmitter<ContactInteractive>();
  @Output() remove = new EventEmitter<ContactInteractive>();
  faMinusCircle = faMinusCircle;

}
