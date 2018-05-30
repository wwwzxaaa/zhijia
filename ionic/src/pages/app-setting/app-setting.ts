import { Component,ViewChild } from '@angular/core';
import {NavController, Nav} from 'ionic-angular';
import { IonicPage,  NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
/**
 * Generated class for the AppSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-setting',
  templateUrl: 'app-setting.html',
})
export class AppSettingPage {
  @ViewChild(Nav) nav: Nav;
  constructor(private app:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppSettingPage');
  }
  loginOut(){
    localStorage.clear();
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
}
