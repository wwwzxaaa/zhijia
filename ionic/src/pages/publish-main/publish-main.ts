import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App ,Events } from 'ionic-angular';
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
    this.name = navParams.get('name')
    this.time = navParams.get('time')
    this.publish_default = navParams.get('main_default')

    if(this.isSecondary==true){
      this.isgood.push({src:'assets/publish/zhijia.png',name:'Zhijia'});
    }
  }

  id = ''
  name = ''
  time = ''
  icon = 'assets/imgs/user.jpg'
  segment_items = []
  ionViewDidEnter(){
    //详情区请求
    this.http.get('http://39.105.139.109:7000/api/v1/content/'+this.id,{}).subscribe(data=>{
      this.publish_main = JSON.parse(data['_body']).data || this.publish_default;
      if(JSON.parse(data['_body']).data !== null){
        this.segment_items = JSON.parse(data['_body']).data.comments;
      }
      this.com = this.segment_items.length;
      // console.log(this.segment_items)
      return this.segment_items

    },err=>{
      console.log(err);
    });
    
    //评论区请求
    
    setTimeout(() => {
      for (let i = 0; i < this.segment_items.length; i++) {
        this.http.get('http://39.105.139.109:7000/api/v1/comment/' + this.segment_items[i], {}).subscribe(data => {
          this.segment_com.unshift({ 
            icon: 'assets/imgs/user.jpg', 
            name:'',
            article: JSON.parse(data['_body']).data.content, 
            time: this.timeTotime(JSON.parse(data['_body']).data.created)           
          });
          // console.log(this.segment_com)
          setTimeout(() => {
            let token = localStorage.getItem('user_token')
            let id = JSON.parse(data['_body']).data.author
            this.http.get('http://39.105.139.109:7000/api/v1/user/' + id + '?token=' + token
              , {}).subscribe(data => {
                this.segment_com[this.segment_items.length-i-1].name = JSON.parse(data['_body']).data.name
              }, err => {
                console.log(err);
              });
          }, 100);
          
        }, err => {
          console.log(err);
        });
      }
      this.segment_com.splice(0,this.segment_items.length)
  
    }, 100);
  
  
  }

  // 帖子详情
  publish_main=[]
  publish_default=[]

  //默认segment
  card = 'com';
  trans = 2;

  //评论列表
  segment_com=[
    // {icon:'assets/publish/my.jpg',name:'Jack Ma',article:'我对钱没有兴趣！',time:'8:16'},
    // {icon:'assets/publish/lqd.jpg',name:'Richard Liu',article:'我不知道，我脸盲=-=！',time:'5月8日'},
    // {icon:'assets/publish/ubi.jpg',name:'Ubi Soft',article:'新鲜的土豆了解一下？',time:'5月6日'}
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
  timeTotime(time){
    let y = time.slice(5,10)
    let h = time.slice(11,16)
    return y+' '+h
  }
  
  //数组查重
  // delRepeat(arr){
  //   for(let i=0; i<arr.length-1; i++){
  //     let oldArr = arr[i]
  //     for(let j=i+1; j<arr.length; j++){
  //       if(oldArr.name == arr[j].name){
  //         arr.splice(j,1);
  //         j--;
  //       }
  //     }
  //   }
  //   return arr
  // }

}

