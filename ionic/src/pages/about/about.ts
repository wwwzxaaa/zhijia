import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Headers,Jsonp,JsonpModule} from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController) {

  }
  helloW=[1];
  ionViewDidLoad() {
    var HTTP=this.http;
    var info=[];
    var content;
    var list_id;
    var pic_id;
    console.log('通知');//页面验证

    //后台信息读取
    //_id、title
    this.http.get('http://localhost:7000/api/v1/content').subscribe(data=>{
      list_id=JSON.parse(data['_body']).data;
      //list_id: 
        //.created  创建时间
        //._id  每个通知的id
        //.gallery[?]  图片id
        //.title  标题
      getPic();
    },err=>{
      console.log(err);
    });
    //图片
    function getPic(){
      HTTP.get('http://localhost:7000/api/v1/file').subscribe(data=>{
        pic_id=JSON.parse(data['_body']).data;//pic_id: //._id  图片知的id //.url  图片网址
        changeInfo();
      })
    }
    function changeInfo(){
      function List(id,time,pic_url){this.id=id;this.time=time;this.pic_url=pic_url;}
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
      //拼接对象
      for(var i=0;i<list_id.length;i++){
      //列表
        var id=list_id[i]._id;
        var title=list_id[i].title;//`````````````标题:title
        var time=list_id[i].created;//`````````````时间:time
        var gallery=list_id[i].gallery;
      //图片
        var pic_url;//`````````````图片url:pic_url
        for(var j=0;j<pic_id.length;j++){
          if(pic_id[j]._id==gallery){
            pic_url=pic_id[j].url;
          }
        }//for2结束
      //内容
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
          //}
          info.push(new List(id,time,pic_url));
      }//for1结束
      console.log(info);
      console.log(this.helloW);
     //this.Info=info;
     //console.log(this.Info);
    }//chengeInfo(){}
  }//页面加载
  
  /*
  info = [
    {
      icon: 'assets/about/zhuoda.jpg', name: '卓达物业', time: '2018年5月2日',
      pic: 'http://localhost:7000/uploaded/files/3_DAYS.jpg', article: '来充钱啊不充钱你怎么变得更强！！！',
      good: 6
    }
  ];
  */
  
}
