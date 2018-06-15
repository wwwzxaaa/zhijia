import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


/**
 * Generated class for the RepairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repair',
  templateUrl: 'repair.html',
})
export class RepairPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public http:Http
  ) {
  }

  ionViewDidLoad() {
    
  }
  confirm(name: HTMLInputElement, content: HTMLInputElement){
    const confirm = this.alertCtrl.create({
      title: '确定提交吗?',
      message: '',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '提交',
          handler: () => {
            let token = localStorage.getItem('user_token');
            // this.http.get('http://39.105.139.109:7000/api/v1/message/?token='+token, {
              
            // }).subscribe(data => {
            //   console.log(JSON.parse(data['_body']));
            // }, err => {
            //   console.log(err);
            // });
            this.http.post('http://39.105.139.109:7000/api/v1/message/', {
              token:token,
              content:content.value,
              name:name.value
            }).subscribe(data => {
              console.log(JSON.parse(data['_body']));
            }, err => {
              console.log(err);
            });
            console.log(name.value,content.value)
            this.navCtrl.pop();
           
          }
        }
      ]
    });
    confirm.present();
    
  }
}
