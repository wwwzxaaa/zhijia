import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AppSettingPage } from '../app-setting/app-setting';
import { PersonPage } from '../person/person';
import { MyPublishPage } from '../my-publish/my-publish';
import { PayPage } from '../pay/pay';
import { MymesPage } from '../mymes/mymes';

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
  //刷新获取name
  doRefresh(refresher) {
    let id = localStorage.getItem('user_id');
    let token = localStorage.getItem('user_token');
    $.ajax({
      url: 'http://39.105.139.109:7000/api/v1/user/'+id,
      type: "get",
      data:{id:id,token:token},
      success:(data) => {
        console.log(data);
        this.showName = data.data.name;
        refresher.complete();
      }
    }) 
     
  }
  mybtn1(){
    this.app.getRootNav().push(PayPage);
  }
  mybtn2(){
    this.app.getRootNav().push(MyPublishPage);
  }
  mybtn3(){
      this.app.getRootNav().push(AppSettingPage);
  }
  myperson(){
    this.app.getRootNav().push(MymesPage);
  }
  toSet(){
    this.navCtrl.push(PersonPage);
  }
}



