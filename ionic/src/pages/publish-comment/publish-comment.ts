import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

/**
 * Generated class for the PublishCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish-comment',
  templateUrl: 'publish-comment.html',
})
export class PublishCommentPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl:AlertController,
    public events:Events
  ) {
  }

  ionViewDidLoad() {
    
  }
  publishing(textarea){
    if(textarea === ''){
      this.AlertWarn();
    }else{
      this.navCtrl.pop();
      this.events.publish('1',textarea,Date.now());
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
