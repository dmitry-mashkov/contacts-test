import { Component, Input, OnInit } from '@angular/core';
import { ContactInteractive } from '../contacts-list/contact-interactive.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: ContactInteractive;

  constructor() { }

  ngOnInit() {
  }

}
