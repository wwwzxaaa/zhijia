import { Component } from '@angular/core';
import { NavController, NavParams,Events } from 'ionic-angular';
import { App } from 'ionic-angular';
import { PertainHomePage } from '../pertain-home/pertain-home';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myplace : string;
  params;
  cityname="";
  constructor(public navCtrl: NavController,private app:App, public navParams: NavParams,public events:Events) {
    this.params= navParams.get('mycity');
    this.cityname=this.params;
  }
  home_button1=[
    {src:'assets/imgs/home_01.png'},
    {src:'assets/imgs/home_02.png'},
    {src:'assets/imgs/home_03.png'},
    {src:'assets/imgs/home_04.png'}
  ]
  home_button2=[
    {src:'assets/imgs/home_05.png'},
    {src:'assets/imgs/home_06.png'},
    {src:'assets/imgs/home_07.png'},
    {src:'assets/imgs/home_08.png'}
  ]

  annex(id){
    if(id==0){
      this.app.getRootNav().push(AboutPage);
    }
    else if(id==7){}
    else{
      this.app.getRootNav().push(PertainHomePage,{id:id});
    }
  }
  goMap(){
    console.log('map');
    this.navCtrl.push(MapPage);
  }

}
