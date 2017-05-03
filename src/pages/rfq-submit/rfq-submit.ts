import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage';

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
  
  defaultHistory: 'page-home' 
  */

})

@Component({
  selector: 'page-rfq-submit',
  templateUrl: 'rfq-submit.html',
})
export class RfqSubmit {
  bizName;
  custName;
  cityName;
  stateName;
  zipCode;
  myArray = [];
  custType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    //this.RfqSubmit.bizName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqSubmit');
  }

  navToRfqFulfill(myRfq: string) {
    this.navCtrl.push('rfq-fulfill', { id: 5678, bizName: this.bizName, custName: this.custName, 
      cityName: this.cityName, stateName: this.stateName });
    // this.storage.set("rfqSave", myRfq);
    // this.myArray.push(myRfq);
    // this.storage.set("rfqSave", this.myArray);
  }

  customerNumber() {
    //open form

  }

  printRadioValue() {
    console.log(this.custType);
  }
}

