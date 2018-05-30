import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';

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
    public events:Events,
    public http:Http,
  ) {}
  
  publishing(textarea){
    if(textarea === ''){
      this.AlertWarn();
    }else{
      this.http.post('http://localhost:7000/api/v1/content/',{
        title:'test03：publish-new创建的内容',
        content:textarea,
        from:'5b0caecb93ae2a032460d0d6',
        "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWIwY2FlY2I5M2FlMmEwMzI0NjBkMGQ2IiwidG9rZW5fdmVyc2lvbiI6MH0sImlhdCI6MTUyNzU1ODM1MSwiZXhwIjoxNTI3NTk0MzUxfQ.So8dKu7gXiaDeYOet1OcFGzHIACa1JpjOozBIisSRO0"
      }).subscribe(data=>{
      console.log(JSON.parse(data['_body']).data);
    },err=>{
      console.log(err);
    });
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
