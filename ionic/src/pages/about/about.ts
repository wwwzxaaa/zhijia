import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Headers,Jsonp,JsonpModule} from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController) {

  }
  content;
  ionViewDidLoad() {
    var HTTP=this.http;
    var list_id;
    var pic_id;
    console.log('通知');//页面验证

    //后台信息读取
    //_id、title
    this.http.get('http://localhost:7000/api/v1/content').subscribe(data=>{
      this.content=JSON.parse(data['_body']);
      list_id=this.content.data;
      //list_id: 
        //.created  创建时间
        //._id  每个通知的id
        //.gallery[?]  图片id
      getPic();
    },err=>{
      console.log(err);
    });
    //图片
    function getPic(){
      console.log(list_id);
      HTTP.get('http://localhost:7000/api/v1/file').subscribe(data=>{
        pic_id=JSON.parse(data['_body']).data;
        console.log(pic_id);
        //pic_id: 
        //._id  图片知的id
        //.url  图片网址
      })
    }
  }
  info = [
    {
      icon: 'assets/about/zhuoda.jpg', name: '卓达物业', time: '2018年5月2日',
      pic: 'http://localhost:7000/uploaded/files/3_DAYS.jpg', article: '来充钱啊不充钱你怎么变得更强！！！',
      good: 6
    }
  ];
}
