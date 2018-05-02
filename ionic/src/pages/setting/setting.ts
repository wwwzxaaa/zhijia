import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AppSettingPage } from '../app-setting/app-setting';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }

  settings=[
    {src:'assets/imgs/setting_01.png',name:'我的关注'},
    {/*fun:'mypub()',*/src:'assets/imgs/setting_02.png',name:'消费'},
    {src:'assets/imgs/setting_03.png',name:'我的社区'},
    {fun:'mypub()',src:'assets/imgs/setting_04.png',name:'软件设置'}
  ]
  mybtn(i){
    if(i==3){
      this.app.getRootNav().push(AppSettingPage);
    }
  }
}



