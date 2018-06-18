import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { InfoMessagePage } from '../info-message/info-message'
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})

export class InfoPage { 
  list:any; 
  
  index:number;
  myid:any;
  mylist:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app:App
  ) {
    
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad InfoPage');
  }

  show(){
    let myuser = localStorage.getItem('user');
    let mypsw = localStorage.getItem('psw');
    // 获取用户token
    $.ajax({
      url: "http://39.105.139.109:7000/api/v1/user/auth",
      type: "post",
      data:{username: myuser,password:mypsw},
      success:(data) => {
        var token=data.data.token;
        $.ajax({
          url: "http://39.105.139.109:7000/api/v1/user/",
          type: "get",
          data:{token:token},
          success:(data) => {
            this.list=data.data;
          }
        })
      }
    })
  }

  goChat(i){
    //将this的指向改为正确的,一下toast组件使用
    let that = this;
    let myuser = localStorage.getItem('user');
    let mypsw = localStorage.getItem('psw');
    $.ajax({
      url: "http://39.105.139.109:7000/api/v1/user/auth",
      type: "post",
      data:{username: myuser,password:mypsw},
      success:(data) => {
        var token=data.data.token;
        $.ajax({
          url: "http://39.105.139.109:7000/api/v1/user/",
          type: "get",
          data:{token:token},
          success:(data) => {
            this.list=data.data;
            this.index=i;
            // this.myid=data.data[i]._id;
            this.mylist=data.data[i];
            console.log(this.mylist);
            that.navCtrl.push(ChatPage,{mylist:this.mylist});
          }
        })
      }
    }) 
  }
  infolist = [
    {imgsURL:'assets/publish/my.jpg',username:'Jack Ma',information:'我没有碰过',time:'9:20'},
  ]


  infoMain(id){
    this.app.getRootNav().push(InfoMessagePage,{
      // id:this.publish[id]._id
    });
  }


}
