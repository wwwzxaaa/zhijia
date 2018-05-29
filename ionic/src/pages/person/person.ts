import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  sendName : string;
  userId:string;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    let sendNick = localStorage.getItem('user');
    this.sendName = sendNick;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }
  setting(nickname:HTMLInputElement){
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否确定改为这个昵称?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消');
          }
        },
        {
          text: '确定',
          handler: () => {
           //修改默认昵称
            $.ajax({
              url:'http://localhost:7000/uploadImg',
              type: 'POST',
              data:{sendName:this.sendName,myName:nickname.value},
              success:(info) => {
                console.log(info.data);
              }
            })
            this.navCtrl.setRoot(SettingPage);
          }
        }
      ]
    });
    alert.present();
  }
}
