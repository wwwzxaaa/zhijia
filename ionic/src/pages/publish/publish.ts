import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
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
    public events:Events,
    private app:App
  ) {
    // 接收发布页面数据
    events.subscribe('user:created',(textarea,time) => {
      console.log(textarea,time);
      this.publish.unshift({icon:'assets/publish/zhijia.png',name:'知家官方团队',pic:'',article:textarea});
    })
  }

  publish=[
    {
      icon:'assets/publish/mht.jpg',name:'Pony Ma',
      pic:'assets/publish/main.jpg',article:'来充钱啊不充钱你怎么变得更强！！！'
    },{
      icon:'assets/publish/my.jpg',name:'Jack Ma',
      pic:'assets/publish/alibaba.jpg',article:'我对钱没有兴趣！我最后悔的就是创立了阿里巴巴！！'
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
    this.tap++;
  }

  isGood:boolean=false;
  
  num = 0;
  isGoodSwitch(){
    if(this.num%2 == 1){
      this.isGood=false;
      this.num++;
    }else{
      this.isGood=true;
      this.num++;
    }
  }
  
  

}
