import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
    console.log(id);
    if(id==0){}
    if(id==1){}
    if(id==2){}
    if(id==3){}
    if(id==4){}
    if(id==5){}
    if(id==6){}
    if(id==7){}
    if(id==8){}
  }
}
