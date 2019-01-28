import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactModule } from './components/contact/contact.module';

@NgModule({
  declarations: [
    RootComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
