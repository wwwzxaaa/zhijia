import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the RegAgrmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg-agrm',
  templateUrl: 'reg-agrm.html',
})
export class RegAgrmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegAgrmPage');
  }
  goLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
}
