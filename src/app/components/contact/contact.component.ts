import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactInteractive } from '../contacts-list/contact-interactive.type';
import { ModesEnum } from '../../enums/modes.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() contact: ContactInteractive;
  @Input() mode: ModesEnum;
  @Output() editClick = new EventEmitter();
  @Output() addClick = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() create = new EventEmitter();

  get isViewVisible() {
    return Boolean(this.contact && this.mode === ModesEnum.View);
  }

  get isEditFormVisible() {
    return Boolean(
      this.contact &&
      (this.mode === ModesEnum.Edit || this.mode === ModesEnum.Add)
    );
  }
}
