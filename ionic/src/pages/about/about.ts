import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  info = [
    {
      icon: 'assets/about/zhuoda.jpg', name: '卓达物业', time: '2018年5月2日',
      pic: 'assets/about/attention.png', article: '来充钱啊不充钱你怎么变得更强！！！',
      good: 6
    }
  ];
}
