import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    public alertCtrl:AlertController
  ) {
  }

  ionViewDidLoad() {
    
  }
  confirm(){
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
            this.navCtrl.pop();
           
          }
        }
      ]
    });
    confirm.present();
    
  }
}
