import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

/**
 * Generated class for the PublishNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish-new',
  templateUrl: 'publish-new.html',
})
export class PublishNewPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl:AlertController,
    public events:Events
  ) {}
  
  publishing(textarea){
    if(textarea === ''){
      this.AlertWarn();
    }else{
      this.navCtrl.pop();
      this.events.publish('user:created',textarea,Date.now());
    }
  }

  AlertWarn() {  
    let alert = this.alertCtrl.create({  
      title: '请输入内容',  
      subTitle: '内容不能为空哦！',  
      buttons: ['取消']  
    });  
    alert.present();  
  }  
}
