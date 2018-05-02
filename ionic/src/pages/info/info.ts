import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  infolist = [
    {imgsURL:'../../assets/imgs/info_img.jpg',username:'小明',information:'你好啊！',time:'9:50'},
    {imgsURL:'assets/imgs/_logo.png',username:'知家团队',information:'欢迎使用知家',time:'9:20'},
  ]

}
