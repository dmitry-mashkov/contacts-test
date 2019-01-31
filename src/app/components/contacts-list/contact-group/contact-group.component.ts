import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactGroup } from '../../../types/contact-group.type';

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.scss']
})
export class ContactGroupComponent implements OnInit {
  @Input() contactGroup: ContactGroup;
  @Output() contactClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onContactClick(contact) {
    console.log('-- contact clicked');
    console.log(contact);
    this.contactClick.emit(contact);
  }
}
