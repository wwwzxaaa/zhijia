import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';

declare var $:any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  showInfo:boolean;
  rootPage:any = TabsPage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    //获取曾经登录过的用户的信息
    let myuser = localStorage.getItem('user')
    let mypsw = localStorage.getItem('psw')
    platform.ready().then(() => {
      //验证用户信息,跳过登录页
      $.ajax({
        type: "post",
        url: "http://39.105.139.109:7000/api/v1/user/auth",
        dataType: "json",
        async: false,
        data:{ username: myuser,password:mypsw },
        success: (data)=>{
          // localStorage.setItem('user_token',data.data.token)
          // console.log(data.message);
          this.showInfo = data.message;
          this.rootPage=TabsPage;
          return this.showInfo; 
        }
        }
      )  
      if (this.showInfo === false) {  
        this.rootPage = LoginPage;  
      } 
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#aa7700');
      splashScreen.hide();
    });
  }
}
