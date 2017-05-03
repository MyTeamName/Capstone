import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RfqSearch } from './rfq-search';

@NgModule({
  declarations: [
    RfqSearch,
  ],
  imports: [
    IonicPageModule.forChild(RfqSearch),
  ],
  exports: [
    RfqSearch
  ]
})
export class RfqSearchModule {}
