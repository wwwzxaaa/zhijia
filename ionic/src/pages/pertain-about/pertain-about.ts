import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-pertain-about',
  templateUrl: 'pertain-about.html',
})
export class PertainAboutPage {

  constructor(
    public http:Http,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.id=navParams.get('id');
    // console.log(this.id)
  }
  id = ''
  info = {created:'',title:'',content:''}
  ionViewDidLoad() {
    this.http.get('http://39.105.139.109:7000/api/v1/content/'+this.id,{}).subscribe(data=>{
      this.info = JSON.parse(data['_body']).data
      console.log(this.info)
      this.info.created =this.timeTotime(this.info.created)
    },err=>{
      console.log(err);
    });
  }

  //时间戳转换时间
  timeTotime(time){
    let y = time.slice(5,10)
    let h = time.slice(11,16)
    return y+' '+h
  }
}
