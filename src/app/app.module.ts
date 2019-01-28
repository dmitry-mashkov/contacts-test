import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactViewComponent } from './components/contact/contact-view/contact-view.component';
import { ContactEditComponent } from './components/contact/contact-edit/contact-edit.component';

@NgModule({
  declarations: [
    RootComponent,
    ContactsListComponent,
    ContactComponent,
    ContactViewComponent,
    ContactEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
