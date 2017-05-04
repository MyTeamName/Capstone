import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { IonicPage, NavController, NavParams } from 'ionic-angular'
import { Storage } from '@ionic/storage';

// import { CustomerService } from '../providers/customer-service/customer-service';
import 'rxjs/add/operator/map';

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

  // static get parameters() {
  //       return [[Http]];
  //   }

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,) {
    //this.RfqSubmit.bizName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RfqSubmit');
  }

  navToRfqFulfill(myRfq: string) {
    this.navCtrl.push('rfq-fulfill', {
      id: 5678, bizName: this.bizName, custName: this.custName,
      cityName: this.cityName, stateName: this.stateName
    });
    // this.storage.set("rfqSave", myRfq);
    // this.myArray.push(myRfq);
    // this.storage.set("rfqSave", this.myArray);
  }

  getCustomerNumber() {
    //  getCustomer(customerNumber) {
    //     var url = 'https://champquotes.isys4283.walton.uark.edu/api/customers';
    //     var response = this.http.get(url).map(res => res.json());
    //     return response;
  }


  printRadioValue() {
    console.log(this.custType);
  }
}

