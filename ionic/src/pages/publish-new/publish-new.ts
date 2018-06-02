import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

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
      this.http.post('http://localhost:7000/api/v1/content/', {
        content: '这是content内容',
        title: textarea,
        from: '5b0ca81b93ae2a032460d0d2',
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWIwY2E4MWI5M2FlMmEwMzI0NjBkMGQyIiwidG9rZW5fdmVyc2lvbiI6MH0sImlhdCI6MTUyNzk0MDE2OCwiZXhwIjoxNTI3OTc2MTY4fQ.LH2L4mIToXUcfGnPVeexUyG05mVWR6C_Dx7wddRUfdY"
      }).subscribe(data => {
        console.log(JSON.parse(data['_body']).data);
      }, err => {
        console.log(err);
      });
      setTimeout(() => {
        this.navCtrl.pop();
      }, 100);
      
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
