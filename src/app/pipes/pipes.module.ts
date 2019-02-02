import { NgModule } from '@angular/core';
import { ContactGroupPipe } from './contact-group/contact-group.pipe';
import { ContactNamePipe } from './contact-name/contact-name.pipe';

@NgModule({
  declarations: [
    ContactGroupPipe,
    ContactNamePipe
  ],
  exports: [
    ContactGroupPipe,
    ContactNamePipe
  ]
})
export class PipesModule { }
