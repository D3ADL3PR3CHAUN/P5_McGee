import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { DisplayPage } from '../display/display';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onOrder(form: NgForm, username) {
        username = username || ""
        this.navCtrl.push(DisplayPage, {data: username})
  }
}