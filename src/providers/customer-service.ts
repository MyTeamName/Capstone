import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CustomerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CustomerService {
  static get parameters() {
        return [[Http]];
  }
  constructor(public http: Http) {
    console.log('Hello CustomerService Provider');
  }

}
  
  
    // getCustomerNumber(input) {
    //     var url = 'https://champquotes.isys4283.walton.uark.edu/api/customers';
    //     var response = this.http.get(url).map(res => res.json());
    //     return response;
   //}
//}
