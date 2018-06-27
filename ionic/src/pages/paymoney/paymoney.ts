import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage } from '../tabs/tabs';
import { App } from 'ionic-angular';
/**
 * Generated class for the PaymoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymoney',
  templateUrl: 'paymoney.html',
})
export class PaymoneyPage {
  gender: string = "d";
  month: string ="a";
  constructor(private app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymoneyPage');
  }
  goHome(){
    this.app.getRootNav().setRoot(TabsPage);
  }
}
