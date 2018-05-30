import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App ,Events, Segment } from 'ionic-angular';
import { PublishCommentPage } from '../publish-comment/publish-comment';
import { Http } from '@angular/http';

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
    public events:Events,
    public http:Http,
    public app:App
  ) {
    //接收数据
    this.id=navParams.get('id');
    // this.isSecondary=!navParams.get('isGood');
    if(this.isSecondary==true){
      this.isgood.push({src:'assets/publish/zhijia.png',name:'Zhijia'});
    }
  }

  id = ''
  segment_items = []
  ionViewWillEnter(){
    //详情区请求
    this.http.get('http://localhost:7000/api/v1/content/'+this.id,{}).subscribe(data=>{
      // console.log(JSON.parse(data['_body']).data);
      this.publish_main = JSON.parse(data['_body']).data;
      this.segment_items = JSON.parse(data['_body']).data.comments;
      this.com = this.segment_items.length + 3;
      // console.log(this.segment_items)

      //评论区请求
      for(let i=0; i<this.segment_items.length; i++ ){
        this.http.get('http://localhost:7000/api/v1/comment/' + this.segment_items[i], {}).subscribe(data => {
  
          this.segment_com.unshift({icon:'assets/publish/zhijia.png',name:'Zhijia',article:JSON.parse(data['_body']).data.title,time:JSON.parse(data['_body']).data.created});
          // console.log(this.segment_items[i])
          // console.log(JSON.parse(data['_body']).data)
        }, err => {
          console.log(err);
        });
      }
  
    },err=>{
      console.log(err);
    });

  }

  // 帖子详情
  publish_main=[]

  //默认segment
  card = 'com';
  trans = 3;

  //评论列表
  segment_com=[
    {icon:'assets/publish/my.jpg',name:'Jack Ma',article:'我对钱没有兴趣！',time:'8:16'},
    {icon:'assets/publish/lqd.jpg',name:'Richard Liu',article:'我不知道，我脸盲=-=！',time:'5月8日'},
    {icon:'assets/publish/ubi.jpg',name:'Ubi Soft',article:'新鲜的土豆了解一下？',time:'5月6日'}
  ]
  //评论数量
  com = 0

  //评论
  myCom(){
    this.app.getRootNav().push(PublishCommentPage,{
      id:this.id
    });
  }
  
  // 点赞列表
  isgood=[
    {src:'assets/publish/my.jpg',name:'Jack Ma'}
  ]

  // 点赞
  isSecondary: boolean=false;
  isGoodSwitch(){
    if(this.isSecondary==false){
      this.isSecondary=true;
      this.isgood.push({src:'assets/publish/zhijia.png',name:'Zhijia'});
    }else{
      this.isSecondary=false;
      this.isgood.pop();
    }
    this.good = this.isgood.length;
  }
  //点赞数量
  good = this.isgood.length;
  
  //时间戳转换时间
  timestampToTime(timestamp) {
    var date = new Date(timestamp);
    // var Y = date.getFullYear() + '年';
    // var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
    // var D = date.getDate() + '日 ';
    var h = date.getHours() + ':';
    var m = date.getMinutes();
    // var s = date.getSeconds();
    return   h + m ;
  }
}
