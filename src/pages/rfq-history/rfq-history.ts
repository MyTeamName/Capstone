import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RfqHistory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'rfq-history',
})
@Component({
  selector: 'page-rfq-history',
  templateUrl: 'rfq-history.html',
})
export class RfqHistory {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqHistory');
  }
  navToRFQSearch() {
    this.navCtrl.push('rfq-search', {id: 7890});
  }

}
