import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RfqComplete page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'rfq-complete',
})
@Component({
  selector: 'page-rfq-complete',
  templateUrl: 'rfq-complete.html',
})
export class RfqComplete {
  bizName;
  custName;
  cityName;
  stateName;
  zipCode;
  vendorNumber;
  vendorName;
  houseCost;
  vendorNotes;
  shipTime;
  custPrice;
  salesNotes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bizName = navParams.get('bizName');
    this.custName = navParams.get('custName');
    this.cityName = navParams.get('cityName');
    this.stateName = navParams.get('stateName');
    this.zipCode = navParams.get('zipCode');
    this.vendorNumber = navParams.get('vendorNumber');
    this.vendorName = navParams.get('vendorName');
    this.houseCost = navParams.get('houseCost');
    this.vendorNotes = navParams.get('vendorNotes');
    this.shipTime = navParams.get('shipTime');
    this.custPrice = navParams.get('custPrice');
    this.salesNotes = navParams.get('salesNotes');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqComplete');
  }

}
