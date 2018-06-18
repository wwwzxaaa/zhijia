import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoMessagePage } from '../info-message/info-message';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  mylist:any;
  params;
  userName : string;
  nickName : string;
  email : string;
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.params= navParams.get('mylist');
    this.mylist=this.params;
    console.log(this.mylist);

    this.userName= this.mylist.username;
    this.nickName=this.mylist.name;

  }
  goMes(){
    this.navCtrl.push(InfoMessagePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
