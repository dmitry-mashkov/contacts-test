import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactsListComponent } from './contacts-list.component';
import { ContactsListItemComponent } from './contact-group/contacts-list-item/contacts-list-item.component';
import { ContactGroupComponent } from './contact-group/contact-group.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsListItemComponent,
    ContactGroupComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PipesModule
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsListModule {
}
