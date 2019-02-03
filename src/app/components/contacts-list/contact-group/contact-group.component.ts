import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContactGroup } from '../../../types/contact-group.type';

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.scss']
})
export class ContactGroupComponent {
  @Input() contactGroup: ContactGroup;
  @Input() isRemoveAllowed: boolean;
  @Output() contactClick = new EventEmitter();

}
