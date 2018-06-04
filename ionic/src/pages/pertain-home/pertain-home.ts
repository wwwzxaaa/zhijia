import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { App } from 'ionic-angular';

/**
 * Generated class for the PertainHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pertain-home',
  templateUrl: 'pertain-home.html',
})
export class PertainHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App,public events:Events) {
    this.id=navParams.get('id');
  }

  ionViewDidLoad() {
    console.log(this.id);
  }
  
 id;

}
