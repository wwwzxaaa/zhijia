import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
/**
 * Generated class for the PaymoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymoney',
  templateUrl: 'paymoney.html',
})
export class PaymoneyPage {
  gender: string = "a";
  month:string ="a";
  place:string="a";
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymoneyPage');
  }
  check:boolean;
  goPay(){
    if(this.check == true){
      let alert = this.alertCtrl.create({
        title: '提示',
        message: '是否确定支付?',
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
             this.navCtrl.setRoot(TabsPage);
            }
          }
        ]
      });
      alert.present();
    }
    
  }
}
