import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PublishMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish-main',
  templateUrl: 'publish-main.html',
})
export class PublishMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishMainPage');
  }

  publish_main=[
    {
      icon:'assets/publish/mht.jpg',name:'Pony Ma',
      pic:'assets/publish/main.jpg',article:'来充钱啊不充钱你怎么变得更强！！！'
    }
  ]

  card = 'com';
}
