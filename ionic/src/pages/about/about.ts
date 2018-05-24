import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http,Jsonp} from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http:Http,public jsonp:Jsonp) {

  }

  list;
  info = [
    {
      icon: 'assets/about/zhuoda.jpg', name: '卓达物业', time: '2018年5月2日',
      pic: 'assets/about/attention.png', article: '来充钱啊不充钱你怎么变得更强！！！',
      good: 6
    }
  ];
  ionViewDidLoad() {
    console.log('物业消息');
    this.http.get('http://localhost:7000/api/v1/content').subscribe(data=>{
      console.log(JSON.parse(data['_body']));
      this.list=JSON.parse(data['_body']);
    })
  }
  
}
