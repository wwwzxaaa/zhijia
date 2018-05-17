import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { RegPage } from '../reg/reg';
import { TabsPage } from '../tabs/tabs';
import { RegAgrmPage } from '../reg-agrm/reg-agrm';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goHome(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
  goReg(){
    this.navCtrl.push(RegPage);
  }
  goFind(){
    this.navCtrl.push(RegAgrmPage);
  }
}
