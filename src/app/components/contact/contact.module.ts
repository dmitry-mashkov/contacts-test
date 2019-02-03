import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactComponent } from './contact.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactEditComponent,
    ContactViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    PipesModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
