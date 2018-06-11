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
    
    this.http.get('http://39.105.139.109:7000/api/v1/content/',{}).subscribe(data=>{
      this.publish = JSON.parse(data['_body']).data;
      // console.log(this.publish)

      //昵称转换author-->username
      for (let i = 0; i < this.publish.length; i++) {
        this.publish[i].icon = 'assets/imgs/user.jpg'
        let id = this.publish[i].author
        let token = localStorage.getItem('user_token')
        this.http.get('http://39.105.139.109:7000/api/v1/user/' + id + '?token=' + token
          , {}).subscribe(data => {
            this.publish[i].name = JSON.parse(data['_body']).data.name
            
            this.publish[i].created = this.timeTotime(this.publish[i].created)
          }, err => {
            console.log(err);
          });

          //content内容显示
          let _id = this.publish[i]._id
          this.http.get('http://39.105.139.109:7000/api/v1/content/' + _id, {}).subscribe(data => {
            this.publish[i].content = JSON.parse(data['_body']).data.content
        
          }, err => {
            console.log(err);
          });
          
      }
    },err=>{
      console.log(err);
    });
  }



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
  
  //时间戳转换时间
  timeTotime(time){
    let y = time.slice(5,10)
    let h = time.slice(11,16)
    return y+' '+h
  }

  
}
