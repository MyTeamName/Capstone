import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RfqSubmit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
  @IonicPage({
  name: 'rfq-submit',
 
 /* 
 segment: 'rfq-submit/:id',
 */

  /* defaultHistory: 'page-home' */
})

@Component({
  selector: 'page-rfq-submit',
  templateUrl: 'rfq-submit.html',
})
export class RfqSubmit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqSubmit');
  }
  navToRFQFulfill() {
    // go to the MyPage component
    this.navCtrl.push('rfq-fulfill', {id: 5678});

  }
}

