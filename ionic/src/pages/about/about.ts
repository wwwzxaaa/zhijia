import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';
import "rxjs/Rx";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController) {

  }
  Info=[];
  getInfo(info){
    this.Info=info;
  }
  ionViewDidEnter() {
    var HTTP=this.http,info=[],list_id,pic_id;
    var that=this;
    // console.log('通知');//页面验证
    //后台信息读取
    //_id、title
    HTTP.get('http://39.105.139.109:7000/api/v1/content').subscribe(data=>{
      list_id=JSON.parse(data['_body']).data; //list_id:  .created  创建时间 ._id  每个通知的id .gallery[?]  图片id .title  标题
      getPic();
    });
    //图片
    function getPic(){
      HTTP.get('http://39.105.139.109:7000/api/v1/file').subscribe(data=>{
        pic_id=JSON.parse(data['_body']).data;//pic_id: //._id  图片知的id //.url  图片网址
        changeInfo();
      })
    }
    function changeInfo(){
      function List(id,time,title,pic_url){this.id=id;this.time=time;this.title=title;this.pic_url=pic_url;}
      //拼接对象
      for(var i=0;i<list_id.length;i++){
      //列表
        var id=list_id[i]._id;
        var title=list_id[i].title;//`````````````标题:title
        var time=list_id[i].created.slice(0,10);//`````````````时间:time
        var gallery=list_id[i].gallery;
      //图片
        var pic_url;//`````````````图片url:pic_url
        for(var j=0;j<pic_id.length;j++){
          if(pic_id[j]._id==gallery){
            pic_url=pic_id[j].url;
          }
        }//for2结束
          info.push(new List(id,time,title,pic_url));
      }//for1结束
      that.getInfo(info);
    }//chengeInfo(){}
    
  }//页面加载

  detail(num){
    console.log(num);
  }
  
 
    /*属性列表
      list_id[]._id 
      list_id[].created
      list_id[].gallery
      pic_id[]._id
      pic_id[].url
      content._id
      content.content
      content.title
      */
     
      //内容
          //}
      /*
        var the_content;
        var id_url='http://localhost:7000/api/v1/content/'+list_id[i]._id;
        //function getContent(){
          HTTP.get(id_url).subscribe(data=>{
              content=JSON.parse(data['_body']).data;
              //content:
              //.content  通知内容
              //.title  通知标题
              //._id  每个通知的id
              the_content=content.content;
            });
            */
  
}
