import { Component, OnInit, Input } from '@angular/core';
import { ContactGroup } from '../../../types/contact-group.type';

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.scss']
})
export class ContactGroupComponent implements OnInit {
  @Input() contactGroup: ContactGroup;

  constructor() { }

  ngOnInit() {
  }

}
