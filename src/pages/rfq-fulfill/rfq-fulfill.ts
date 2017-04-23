import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RfqFulfill page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'rfq-fulfill',
})
@Component({
  selector: 'page-rfq-fulfill',
  templateUrl: 'rfq-fulfill.html',
})
export class RfqFulfill {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqFulfill');
  }

}
