import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { App } from 'ionic-angular';
import { Http,Jsonp } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-pertain-about',
  templateUrl: 'pertain-about.html',
})
export class PertainAboutPage {

  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams,private app:App) {
    this.info=navParams.get('info');
  }

  ionViewDidLoad() {
    console.log(this.info);
        var id_url='http://39.105.139.109:7000/api/v1/content/'+this.info.id;
          this.http.get(id_url).subscribe(data=>{
             // content=JSON.parse(data['_body']).data;
              //content:
              //.content  通知内容
              //.title  通知标题
              //._id  每个通知的id
              this.content=JSON.parse(data['_body']).data.content;
            });
            this.http.get('http://39.105.139.109:7000/api/v1/file').subscribe(data=>{
              console.log(JSON.parse(data['_body']).data);
              for(var i=0;i<this.info.gallery.length;i++){
                for(var j=0;j<JSON.parse(data['_body']).data.length;j++){
                  if(JSON.parse(data['_body']).data[j]._id==this.info.gallery[i]){
                    this.url_list.push(JSON.parse(data['_body']).data[j].url)
                  }
                }
              }
              //JSON.parse(data['_body']).data;//pic_id: //._id  图片知的id //.url  图片网址
            })
  }
  info;
  content;
  url_list=[];
      /*
        var the_content;
        var id_url='http://39.105.139.109:7000/api/v1/content/'+list_id[i]._id;
        //function getContent(){
          HTTP.get(id_url).subscribe(data=>{
              content=JSON.parse(data['_body']).data;
              //content:
              //.content  通知内容
              //.title  通知标题
              //._id  每个通知的id
              the_content=content.content;
            });

            function getPic(){
              HTTP.get('http://39.105.139.109:7000/api/v1/file').subscribe(data=>{
                pic_id=JSON.parse(data['_body']).data;//pic_id: //._id  图片知的id //.url  图片网址
                changeInfo();
      })
    }
            */
}
