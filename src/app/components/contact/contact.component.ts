import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactInteractive } from '../contacts-list/contact-interactive.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact: ContactInteractive;
  @Input() isInEditMode: boolean;
  @Output() editClick = new EventEmitter();
  @Output() update = new EventEmitter();

}
