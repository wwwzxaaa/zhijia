import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AppSettingPage } from '../app-setting/app-setting';
import { PersonPage } from '../person/person';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  userData : string;
  usersetPsw : string;
  showName : string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    let userInfo = localStorage.getItem('user');
    let setPsw = localStorage.getItem('psw');
    
    this.userData = userInfo;
    this.usersetPsw = setPsw;
    
  }
  //刷新获取nickname
  doRefresh(refresher) {
    $.ajax({
      url:'http://localhost:7000/api/v1/user/auth',
      type: 'POST',
      data:{username:this.userData,password:this.usersetPsw},
      success:(info) => {
        console.log(info.data);
        this.showName = info.data[0].nickname;
        refresher.complete();
      }
    })   
  }
  mybtn3(){
      this.app.getRootNav().push(AppSettingPage);
  }
  myperson(){
    this.app.getRootNav().push(PersonPage);
  }
  toSet(){
    this.navCtrl.push(PersonPage);
  }
  loginOut(){
    localStorage.clear();
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
}



