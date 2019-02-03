import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { pick } from 'lodash/fp';

import { Contact } from '../../../types/contact.type';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  @Input() contact: Contact;
  @Output() update = new EventEmitter();

  faPlus = faPlus;

  fieldNames = ['firstName', 'lastName', 'phone', 'email', 'address', 'note'];
  profileForm = new FormGroup(
    this.fieldNames.reduce((result, field) => ({ ...result, ...{ [field]: new FormControl('') }}), {})
  );

  constructor() { }

  ngOnInit() {
    // this.model = (this.mode === FormModes.Add) ? new Supplier() : _.cloneDeep(this.supplier);
    this.profileForm.setValue(
      pick(this.fieldNames)(this.contact)
    );
  }

  onSubmit() {
    this.update.emit(pick(this.fieldNames)(this.profileForm.value));
  }
}
