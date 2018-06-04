import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
import { App } from 'ionic-angular';
import { AppSettingPage } from '../app-setting/app-setting';
import { PertainHomePage } from '../pertain-home/pertain-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private app:App, public navParams: NavParams,public events:Events) {

  }
  home_button=[
    {src:'assets/imgs/home_01.png'},
    {src:'assets/imgs/home_02.png'},
    {src:'assets/imgs/home_03.png'},
    {src:'assets/imgs/home_04.png'},
    {src:'assets/imgs/home_05.png'},
    {src:'assets/imgs/home_06.png'},
    {src:'assets/imgs/home_07.png'},
    {src:'assets/imgs/home_08.png'}
  ]

  annex(id){
    this.app.getRootNav().push(PertainHomePage,{id:id});
  }
}
