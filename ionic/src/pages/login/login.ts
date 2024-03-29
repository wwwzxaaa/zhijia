import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';//引入toast模块
import { ModalController } from 'ionic-angular';//模态模块
import { RegPage } from '../reg/reg';
import { TabsPage } from '../tabs/tabs';
import { RegAgrmPage } from '../reg-agrm/reg-agrm';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any; 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public modalCtrl: ModalController,private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  ico = 'assets/login/login-ico.png'
  userIco() {
    // console.log("user")
    this.ico = 'assets/login/user-ico.png'
  }
  pswIco(){
    // console.log("psw")
    this.ico = 'assets/login/psw-ico.png'
  }
  loginIco(){
    this.ico = 'assets/login/login-ico.png'
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if(username.value==null){
        alert('用户名不能为空');
    }else if(password.value==null){
        alert('密码不能少于6位');
    }  
    //let userinfo: string = '用户名：' + username.value  + '密码：' + password.value;
    $.ajax({
      url:'http://39.105.139.109:7000/api/v1/user/auth',
      type: 'POST',
      data:{username: username.value, password: password.value},
      //箭头函数的this指向为当前对象
      success:(msg)=>{
        // console.log(msg);
        if(msg){
          if(msg.success==false){
            console.log("注册");
            let toast = this.toastCtrl.create({
              message: '账号密码错误!',
              duration: 3000,
              position: 'middle'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
          }else if(msg.success==true){
            // console.log("成功")
            let toast = this.toastCtrl.create({
              message: '登录成功!',
              duration: 3000,
              position: 'middle'
            });
            
            localStorage.setItem('user_token',msg.data.token);
            localStorage.setItem('user_id',msg.data._id);
            
            toast.onDidDismiss(() => {
              // console.log('Dismissed toast');
            });
            
            //保存local账号密码
            localStorage.setItem('user',username.value);
            localStorage.setItem('psw',password.value);
            
            toast.present();
            //验证完成完成跳转
            this.navCtrl.push(TabsPage);
          }else{
            alert("登录失败");
          }
        }
      }
    }) 
   
  }
  //弹出注册页
  goReg(){
    this.navCtrl.push(RegPage);
  }
  goFind(){
    this.navCtrl.push(RegAgrmPage);
  }
}
