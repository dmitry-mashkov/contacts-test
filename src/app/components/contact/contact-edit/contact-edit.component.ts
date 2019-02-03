import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { pick } from 'lodash/fp';

import { Contact } from '../../../types/contact.type';
import { ModesEnum } from '../../../enums/modes.enum';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  @Input() contact: Contact;
  @Input() mode: ModesEnum;
  @Output() update = new EventEmitter();
  @Output() create = new EventEmitter();

  faPlus = faPlus;

  fieldNames = ['firstName', 'lastName', 'phone', 'email', 'address', 'note'];
  profileForm = new FormGroup(
    this.fieldNames.reduce((result, field) => ({ ...result, ...{ [field]: new FormControl('') }}), {})
  );

  ngOnInit() {
    if (this.mode === ModesEnum.Edit) {
      this.profileForm.setValue(
        pick(this.fieldNames)(this.contact)
      );
    }
  }

  onSubmit() {
    const data = pick(this.fieldNames)(this.profileForm.value);

    if (this.mode === ModesEnum.Edit) {
      this.update.emit(data);

    } else {
      this.create.emit(data);
    }
  }
}
