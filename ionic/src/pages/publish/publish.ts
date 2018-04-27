import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PublishNewPage } from '../publish-new/publish-new';
import { PublishMainPage } from '../publish-main/publish-main';

/**
 * Generated class for the PublishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    
    private app:App
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishPage');
  }

  publish=[
    {
      icon:'assets/publish/mht.jpg',name:'Pony Ma',
      pic:'assets/publish/main.jpg',article:'来充钱啊不充钱你怎么变得更强！！！'
    },{
      icon:'assets/publish/mht.jpg',name:'Pony Ma',
      pic:'assets/publish/main.jpg',article:'来充钱啊不充钱你怎么变得更强！！！'
    }
  ]

  myPub(i){
    this.app.getRootNav().push(PublishNewPage);
  }
  myComment(){
    this.app.getRootNav().push(PublishNewPage);
  }

  pubMain(){
    this.app.getRootNav().push(PublishMainPage);
  }

  public tap:number=0;
  tapEvent(){
    this.tap++
  }


}
