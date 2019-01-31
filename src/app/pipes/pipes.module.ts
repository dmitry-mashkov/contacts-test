import { NgModule } from '@angular/core';
import { ContactGroupPipe } from './contact-group/contact-group.pipe';

@NgModule({
  declarations: [
    ContactGroupPipe
  ],
  exports: [
    ContactGroupPipe
  ]
})
export class PipesModule { }
