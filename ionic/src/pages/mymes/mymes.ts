import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { identifierName } from '@angular/compiler';

/**
 * Generated class for the MymesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-mymes',
  templateUrl: 'mymes.html',
})
export class MymesPage {
  username:string;
  nickname:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let id = localStorage.getItem('user_id');
    let username = localStorage.getItem('user');
    this.username=username;
    let token = localStorage.getItem('user_token');
    $.ajax({
      url: "http://39.105.139.109:7000/api/v1/user/"+id,
      type: "get",
      data:{token:token,id:id},
      success:(data) => {
        // console.log(data.data);
        this.nickname=data.data.name;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MymesPage');
  }

}
