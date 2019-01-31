import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { ContactModule } from './components/contact/contact.module';
import { ContactsListModule } from './components/contacts-list/contacts-list.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    ContactModule,
    ContactsListModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
