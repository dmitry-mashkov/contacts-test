import { Component, OnInit, Input } from '@angular/core';
import {Contact} from '../../types/contact.type';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit() {
  }

}
