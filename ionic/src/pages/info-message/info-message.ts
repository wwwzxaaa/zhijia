import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-message',
  templateUrl: 'info-message.html',
})
export class InfoMessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoMessagePage');
  }

  sendmsg:string;
  send(){
    this.message.push({msg:this.sendmsg})
    this.sendmsg = ''
  }

  message = [
    // {msg:'我点一下“发送”就能发送消息你怕不怕！'}
  ]

}
