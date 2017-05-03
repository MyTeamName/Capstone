import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqHistory } from './rfq-history';

@NgModule({
  declarations: [
    RfqHistory,
  ],
  imports: [
    IonicPageModule.forChild(RfqHistory),
  ],
  exports: [
    RfqHistory
  ]
})
export class RfqHistoryModule {}
