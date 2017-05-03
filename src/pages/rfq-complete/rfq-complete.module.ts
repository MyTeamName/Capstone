import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqComplete } from './rfq-complete';

@NgModule({
  declarations: [
    RfqComplete,
  ],
  imports: [
    IonicPageModule.forChild(RfqComplete),
  ],
  exports: [
    RfqComplete
  ]
})
export class RfqCompleteModule {}
