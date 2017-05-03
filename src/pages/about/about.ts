import { Component } from '@angular/core';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  template: `
    <form ion-form (ngSubmit)="loginForm()">
      <ion-item>
        <ion-label>User</ion-label>
        <ion-input type="text" [(ngModel)]="user.title" name="user"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Password</ion-label>
        <ion-textarea [(ngModel)]="password.title" name="password"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" block>LOGIN</button>
    </form>
  `,
})
export class AboutPage {
  user = {}
  loginForm() {
    console.log(this.user)
  
  }
}


