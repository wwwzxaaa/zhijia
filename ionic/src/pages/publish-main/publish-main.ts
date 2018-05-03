import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events:Events
  ) {
    //接收数据
    this.publish_main[0]=navParams.get('publish');
    this.isSecondary=navParams.get('isGood');
    if(this.isSecondary==true){
      this.isgood.push({src:'assets/publish/zhijia.png',name:'Zhijia'});
    }
    
  }

  // 帖子详情
  publish_main=[
    // {
    //   icon:'assets/publish/mht.jpg',name:'Pony Ma',
    //   pic:'assets/publish/main.jpg',article:'来充钱啊不充钱你怎么变得更强！！！'
    // }
  ]
  

  // 点赞列表
  isgood=[
    {src:'assets/publish/my.jpg',name:'Jack Ma'}
  ]

  //默认segment
  card = 'com';
  //评论列表
  segment_com=[
    {src:'assets/publish/my.jpg',name:'Jack Ma',com:'我对钱没有兴趣！'},
    {src:'assets/publish/lqd.jpg',name:'Richard Liu',com:'我不知道，我脸盲=-=！'},
    {src:'assets/publish/ubi.jpg',name:'Ubi Soft',com:'新鲜的土豆了解一下？'}
  ]

  // 点赞颜色
  isSecondary: boolean;
  // num = 0;
  isGoodSwitch(){
    if(this.isSecondary==false){
      this.isSecondary=true;
      this.isgood.push({src:'assets/publish/zhijia.png',name:'Zhijia'});
      // this.num++;
    }else{
      this.isSecondary=false;
      this.isgood.pop();
      // this.num++;
    }
    // this.events.publish('user:created',this.isSecondary);
  }
  
}
