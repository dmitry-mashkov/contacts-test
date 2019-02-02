import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ContactInteractive } from '../../contacts-list/contact-interactive.type';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent {
  @Input() contact: ContactInteractive;
  @Output() editClick = new EventEmitter();
  faPlus = faPlus;

}
