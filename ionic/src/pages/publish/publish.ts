import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
import { PublishNewPage } from '../publish-new/publish-new';
import { PublishMainPage } from '../publish-main/publish-main';
import { PublishCommentPage } from '../publish-comment/publish-comment';

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
    private app:App,
    public http: Http
  ) {
  }

  // 搜索框
  mySea = false;
  mySearch(){
    if(this.mySea == false){
      this.mySea = true;
    }else{
      this.mySea = false;
    } 
  }
  publish = [];

  ionViewDidEnter(){
    
    this.http.get('http://localhost:7000/api/v1/content/',{}).subscribe(data=>{
      this.publish = JSON.parse(data['_body']).data;
      // console.log(this.publish.length)

      //昵称转换author-->username
      for (let i = 0; i < this.publish.length; i++) {

        let id = this.publish[i].author
        let token = localStorage.getItem('user_token')
        this.http.get('http://localhost:7000/api/v1/user/' + id + '?token=' + token
          , {}).subscribe(data => {
            this.publish[i].name = JSON.parse(data['_body']).data.name
            this.publish[i].icon = '/assets/imgs/user.jpg'
            this.publish[i].created = this.timeTotime(this.publish[i].created)
          
          }, err => {
            console.log(err);
          });
      }

      

    },err=>{
      console.log(err);
    });
  }

  //默认帖子数据
  publish_default=[
    {
      icon:'assets/publish/mht.jpg',name:'Pony Ma',created:'2018年5月2日',
      pic:'assets/publish/main.jpg',title:'来充钱啊不充钱你怎么变得更强！！！',
      up:6
    },{
      icon:'assets/publish/my.jpg',name:'Jack Ma',created:'2018年5月2日',
      pic:'assets/publish/alibaba.jpg',title:'我对钱没有兴趣！我最后悔的就是创立了阿里巴巴！！',
      up:8
    },{
      icon:'assets/publish/leijun.jpg',name:'R.U.OK',created:'2018年5月2日',
      pic:'assets/publish/xiaomi.jpg',title:'小米，为发烧而生！Are You OK？',
      up:8
    }
  ]

  //下拉刷新
  doRefresh(refresher) {
    setTimeout(() => {
      this.ionViewDidEnter()
      refresher.complete();
    }, 1000);
  }
  //上拉加载
  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');
  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 500);
  // }

  //点击发布按钮
  myPub(i){
    this.app.getRootNav().push(PublishNewPage);
  }
  //点击评论按钮
  myComment(id){
    this.app.getRootNav().push(PublishCommentPage,{
      id:this.publish[id]._id
    });
    
  }
  //点击进入详情,发送数据到详情页publish-main
  pubMain(id){
    this.app.getRootNav().push(PublishMainPage,{
      id:this.publish[id]._id,
      name:this.publish[id].name,
      time:this.publish[id].created
    });
  }

  pubMain_default(id){
    this.app.getRootNav().push(PublishMainPage,{
      main_default:this.publish_default[id]
    });
  }

  //点赞
  isGood:boolean=true;
  goodColor = {
    'color': '#ccc'
  }
  isGoodSwitch(id){
    if(this.isGood==true){
      this.goodColor = {
        'color': '#FFbb00'
      }
      this.isGood=false;
      this.publish[id].up++;
    }else{
      this.goodColor = {
        'color': '#ccc'
      }
      this.isGood=true;
      if(this.publish[id].up>0){
        this.publish[id].up--;
      }  
    }
  }
  
  isGoodSwitch_default(id){
    if(this.isGood==true){
      this.goodColor = {
        'color': '#FFbb00'
      }
      this.isGood=false;
      this.publish_default[id].up++;
    }else{
      this.goodColor = {
        'color': '#ccc'
      }
      this.isGood=true;
      if(this.publish_default[id].up>0){
        this.publish_default[id].up--;
      }  
    }
  }
  
  //时间戳转换时间
  timeTotime(time){
    let y = time.slice(5,10)
    let h = time.slice(11,16)
    return y+' '+h
  }

  
}
