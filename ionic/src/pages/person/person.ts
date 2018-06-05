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
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }
  setting(nickname:HTMLInputElement){
    let myuser = localStorage.getItem('user');
    let mypsw = localStorage.getItem('psw');
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
            url: "http://localhost:7000/api/v1/user/auth",
            type: "post",
            data:{username: myuser,password:mypsw},
            success:(data) => {
              console.log(data.data);
              var id=data.data._id;
              var token=data.data.token;
              var myname=data.data.name;
              console.log(id);
              $.ajax({
                url: 'http://localhost:7000/api/v1/user/'+id+'/update',
                type: "post",
                data:{id:id,token:token},
                success:(data) => {
                  myname=nickname.value;
                  console.log(myname);
                }
              })
            }
          })
          this.navCtrl.setRoot(SettingPage)
          }
        }
      ]
    });
    alert.present();
  }
}
