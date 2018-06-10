import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { PertainAboutPage } from '../pertain-about/pertain-about';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(
    public http:Http,
    public navCtrl: NavController,
    private app:App
  ) {

  }

  infoAll = []
  info = []
  ionViewWillEnter() {

    this.http.get('http://39.105.139.109:7000/api/v1/content/', {}).subscribe(data => {
      this.infoAll = JSON.parse(data['_body']).data;
      // author = 5b10f91ba5a3c70ede59023b
      // console.log(this.infoAll)
      for(let i=0; i<this.infoAll.length; i++){
        if(this.infoAll[i].author == '5b10f91ba5a3c70ede59023b'){
          this.infoAll[i].created =this.timeTotime(this.infoAll[i].created)
          this.info.unshift(this.infoAll[i])
          // console.log(this.info)
          // this.info[i].time = this.timeTotime(this.infoAll[i].created)
        }
      }

    }, err => {
      console.log(err);
    });
  }
  
  ionViewDidLeave(){
    this.info = []
  }

  main(id){
    this.app.getRootNav().push(PertainAboutPage,{
      id:this.info[id]._id
    });
  }

  //时间戳转换时间
  timeTotime(time){
    let y = time.slice(5,10)
    let h = time.slice(11,16)
    return y+' '+h
  }






















  // Info=[];
  // getInfo(info){
  //   this.Info=info;
  // }
  // ionViewDidEnter() {
  //   var HTTP=this.http,info=[],list_id,pic_id;
  //   var that=this;
  //   // console.log('通知');//页面验证
  //   //后台信息读取
  //   //_id、title
  //   HTTP.get('http://39.105.139.109:7000/api/v1/content').subscribe(data=>{
  //     list_id=JSON.parse(data['_body']).data; //list_id:  .created  创建时间 ._id  每个通知的id .gallery[?]  图片id .title  标题
  //     getPic();
  //   });
  //   //图片
  //   function getPic(){
  //     HTTP.get('http://39.105.139.109:7000/api/v1/file').subscribe(data=>{
  //       pic_id=JSON.parse(data['_body']).data;//pic_id: //._id  图片知的id //.url  图片网址
  //       changeInfo();
  //     })
  //   }
  //   function changeInfo(){
  //     function List(id,time,title,pic_url,gallery){this.id=id;this.time=time;this.title=title;this.pic_url=pic_url;this.gallery=gallery;}
  //     //拼接对象
  //     for(var i=0;i<list_id.length;i++){
  //     //列表
  //       var id=list_id[i]._id;
  //       var title=list_id[i].title;//`````````````标题:title
  //       var time=list_id[i].created.slice(0,10);//`````````````时间:time
  //       var gallery=list_id[i].gallery;
  //     //图片
  //       var pic_url=undefined;//`````````````图片url:pic_url
  //       for(var j=0;j<pic_id.length;j++){
  //         if(pic_id[j]._id==gallery[0]){
  //             pic_url=pic_id[j].url;
  //         }
  //       }//for2结束
  //         info.push(new List(id,time,title,pic_url,gallery));
  //     }//for1结束
  //     that.getInfo(info);
  //   }//chengeInfo(){}
    
  // }//页面加载

  // detail(num){
  //   this.app.getRootNav().push(PertainAboutPage,{info:this.Info[num]});
  // }
  
 
   
  
}
