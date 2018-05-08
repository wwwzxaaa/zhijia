import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PublishPage } from '../pages/publish/publish';
import { PublishNewPage} from '../pages/publish-new/publish-new';
import { PublishMainPage } from '../pages/publish-main/publish-main';
import { PublishCommentPage } from '../pages/publish-comment/publish-comment';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { LoginPage } from '../pages/login/login';
import { RegPage } from '../pages/reg/reg';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoPage } from '../pages/info/info';
import { AppSettingPage } from '../pages/app-setting/app-setting';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PublishPage,
    PublishNewPage,
    PublishMainPage,
    PublishCommentPage,
    SettingPage,
    InfoPage,
    AppSettingPage
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    JsonpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'  ',
      iconMode:'ios',
      mode:'ios'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PublishPage,
    PublishNewPage,
    PublishMainPage,
    PublishCommentPage,
    SettingPage,
    InfoPage,
    AppSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
