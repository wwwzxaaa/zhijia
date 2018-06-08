import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';//模态模块
import { LoginPage } from '../login/login'
import { WelcomePage } from '../welcome/welcome'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {
  loginForm: FormGroup;
  username : any;
  password : any;
  email:any;
  name:any;
  firstIn : string;
  secondIn : string;
  isdis : boolean;
  nickname : string='';
  constructor(private formBuilder: FormBuilder, 
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
      this.loginForm = formBuilder.group({
        username: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(11), Validators.required, Validators.pattern("/^[a-zA-z]\w{5,10}$/")])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      })
      this.username = this.loginForm.controls['username'];
      this.password = this.loginForm.controls['password'];
      this.email = this.loginForm.controls['email'];
      this.name = this.loginForm.controls['name'];
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RegPage');
  }
  goWe(){
    this.navCtrl.push(WelcomePage);
  }
  toRegister(username: HTMLInputElement, password: HTMLInputElement,email: HTMLInputElement,name: HTMLInputElement){
    if($("#check").is(":checked")){
    //将this的指向改为正确的,一下toast组件使用
    let _this = this;
    $.ajax({
      type: "post",
      url: "http://39.105.139.109:7000/api/v1/user/register",
      dataType: "json",
      data:{ username: username.value, password: password.value,email:email.value,name:name.value},
      success: function(data){
      //接受返回的数据，前端判断采取的动作
      console.log(data);
      if(data){
          if(data.success==false){
            //已被注册的话显示toast组件
            let toast = _this.toastCtrl.create({
              message: '该账号已经被注册了!',
              duration: 3000,
              position: 'middle'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
          }else if(data.success==true){
            let toast = _this.toastCtrl.create({
              message: '注册成功,请登录!',
              duration: 3000,
              position: 'middle'
            });
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });

            toast.present();

            _this.navCtrl.setRoot(LoginPage);
          }else{
            alert("注册失败");
          }
        }
      }
    });
  }
}
}
