import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactEditComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
