import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ContactInteractive } from '../../contacts-list/contact-interactive.type';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  @Input() contact: ContactInteractive;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
