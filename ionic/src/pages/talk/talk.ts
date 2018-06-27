import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { InfoMessagePage } from '../info-message/info-message';
import { App } from 'ionic-angular';
/**
 * Generated class for the TalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-talk',
  templateUrl: 'talk.html',
})
export class TalkPage {
  params;
  list:any;
  username :any;
  nickname :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    this.params= navParams.get('list');
    this.list=this.params;
    // console.log(this.list);
    this.username=this.list.username;
    this.nickname=this.list.name;

  }
  goTalk(){
    this.app.getRootNav().push(InfoMessagePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TalkPage');
  }

}
