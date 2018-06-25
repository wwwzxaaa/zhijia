import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer } from 'ionic-angular';
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
  id:any;
  list:any;
  username : string = '';
  nickname : string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    this.params= navParams.get('id');
    this.id=this.params;
    let token = localStorage.getItem('user_token');
    $.ajax({
      url: "http://39.105.139.109:7000/api/v1/user/",
      type: "get",
      data:{token:token},
      success:(data) => {
        this.list=data.data;
        for(var i=0;i<this.list.length;i++){
          if(this.id==this.list[i]._id){
            this.username=this.list[i].username;
            this.nickname=this.list[i].name;
          }
        }
      }
    })
  }
  goTalk(){
    this.app.getRootNav().push(InfoMessagePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TalkPage');
  }

}
