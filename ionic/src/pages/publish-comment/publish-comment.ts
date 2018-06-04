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
        content: textarea,
        from: this.id,
        token: localStorage.getItem('user_token')
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
