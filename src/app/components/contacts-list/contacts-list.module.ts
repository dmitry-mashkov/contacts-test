import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsListItemComponent } from './contact-group/contacts-list-item/contacts-list-item.component';
import { ContactGroupComponent } from './contact-group/contact-group.component';
import { ContactGroupPipe } from '../../pipes/contact-group/contact-group.pipe';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsListItemComponent,
    ContactGroupComponent
  ],
  imports: [
    CommonModule,
    // ContactGroupPipe
  ],
  exports: [
    ContactsListComponent
  ]
})
export class ContactsListModule {
}
