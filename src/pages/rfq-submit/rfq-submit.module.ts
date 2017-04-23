import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqSubmit } from './rfq-submit';

@NgModule({
  declarations: [
    RfqSubmit,
  ],
 
  imports: [
    IonicPageModule.forChild(RfqSubmit),

  ],
  exports: [
    RfqSubmit
  ]
})
export class RfqSubmitModule {}
