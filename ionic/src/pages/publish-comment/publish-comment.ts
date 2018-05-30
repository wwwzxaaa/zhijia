import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { Http } from '@angular/http';

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
    public events:Events,
    public http:Http,
  ) {
    this.id=navParams.get('id');
  }

  id = ''
  ionViewDidLoad() {
    
  }
  publishing(textarea){
    if(textarea === ''){
      this.AlertWarn();
    }else{     
      this.http.post('http://localhost:7000/api/v1/comment/', {
        content: '这是评论内容',
        title: textarea,
        from: this.id,
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWIwY2E4MWI5M2FlMmEwMzI0NjBkMGQyIiwidG9rZW5fdmVyc2lvbiI6MH0sImlhdCI6MTUyNzYzOTMxNiwiZXhwIjoxNTI3Njc1MzE2fQ.QInCU6Mv-7mEnrry4PlvdA5xWx3QIDe0rg8ffl3La_c"
      }).subscribe(data => {
        console.log(JSON.parse(data['_body']).data);
      }, err => {
        console.log(err);
      });

      this.navCtrl.pop();
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
