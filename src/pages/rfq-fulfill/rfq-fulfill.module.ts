import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqFulfill } from './rfq-fulfill';

@NgModule({
  declarations: [
    RfqFulfill,
  ],
  imports: [
    IonicPageModule.forChild(RfqFulfill),
  ],
  exports: [
    RfqFulfill
  ]
})
export class RfqFulfillModule {}
