import { Component, OnInit } from '@angular/core';
import {Contact} from '../../types/contact.type';
import {ContactService} from '../../services/contact/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts() as any;
  }

}
