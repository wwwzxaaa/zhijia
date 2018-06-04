import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { InfoMessagePage } from '../info-message/info-message'

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app:App
  ) {
    
  }
  
  ionViewDidLoad() {
    // console.log('ionViewDidLoad InfoPage');
  }
  goMsg(){
  }
  show(){
    let myuser = localStorage.getItem('user');
    let mypsw = localStorage.getItem('psw');
    //获取用户token
    $.ajax({
      url: "http://39.105.139.109:7000/api/v1/user/auth",
      type: "post",
      data:{username: myuser,password:mypsw},
      success:(data) => {
        // console.log(data.data);
        var token=data.data.token;
        // console.log(token);
        //将token传入
        $.ajax({
          url: "http://39.105.139.109:7000/api/v1/user/",
          type: "get",
          data:{token:token},
          success:(data) => {
            // console.log(data);
            this.list=data.data;
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
