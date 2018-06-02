import { Component,ViewChild } from '@angular/core';
import {NavController, Nav} from 'ionic-angular';
import { IonicPage,  NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SetAboutPage } from '../set-about/set-about';
import { SetHelpPage } from '../set-help/set-help';
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
  constructor(
    private app:App,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AppSettingPage');
  }


  about(){
    this.app.getRootNav().push(SetAboutPage)
  }

  help(){
    this.app.getRootNav().push(SetHelpPage)
  }


  loginOut(){
    localStorage.clear();
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
}
