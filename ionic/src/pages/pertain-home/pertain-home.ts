import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.id=navParams.get('id');
  }

  ionViewDidLoad() {
    console.log(this.id);
  }
  info=[
    {},
    // {src:"assets/imgs/home_02.png"},
    {src:"assets/imgs/home_03.png"},
    {src:"assets/imgs/home_04.png"},
    {src:"assets/imgs/home_05.png"},
    // {src:"assets/imgs/home_06.png"},
    {src:"assets/imgs/home_07.png"}
  ]
 id;

}
