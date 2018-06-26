import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PayPage } from '../pages/pay/pay';
import { FixPage } from '../pages/fix/fix';
import { WelcomePage } from '../pages/welcome/welcome';
import { RegAgrmPage } from '../pages/reg-agrm/reg-agrm';
import { AboutPage } from '../pages/about/about';
import { MyPublishPage } from '../pages/my-publish/my-publish';
import { PublishPage } from '../pages/publish/publish';
import { PublishNewPage} from '../pages/publish-new/publish-new';
import { PublishMainPage } from '../pages/publish-main/publish-main';
import { PublishCommentPage } from '../pages/publish-comment/publish-comment';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { SetAboutPage } from '../pages/set-about/set-about';
import { SetHelpPage } from '../pages/set-help/set-help';
import { LoginPage } from '../pages/login/login';
import { RegPage } from '../pages/reg/reg';
import { RepairPage } from '../pages/repair/repair';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InfoPage } from '../pages/info/info';
import { InfoMessagePage } from '../pages/info-message/info-message'
import { AppSettingPage } from '../pages/app-setting/app-setting';
import { PersonPage } from '../pages/person/person';
import { PertainHomePage } from '../pages/pertain-home/pertain-home';
import { PertainAboutPage } from '../pages/pertain-about/pertain-about';
import { MapPage } from '../pages/map/map';
import { TalkPage } from '../pages/talk/talk';
import { PaymoneyPage } from '../pages/paymoney/paymoney';
import { MymesPage } from '../pages/mymes/mymes';


@NgModule({
  declarations: [
    MyApp,
    RegAgrmPage,
    WelcomePage,
    LoginPage,
    RegPage,
    RepairPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PublishPage,
    PublishNewPage,
    PublishMainPage,
    PublishCommentPage,
    MyPublishPage,
    SettingPage,
    SetAboutPage,
    SetHelpPage,
    InfoPage,
    InfoMessagePage,
    AppSettingPage,
    PersonPage,
    PertainHomePage,
    PertainAboutPage,
    MapPage,
    PayPage,
    FixPage,
    TalkPage,
    PaymoneyPage,
    MymesPage
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
    WelcomePage,
    RegAgrmPage,
    LoginPage,
    RegPage,
    RepairPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PublishPage,
    PublishNewPage,
    PublishMainPage,
    PublishCommentPage,
    MyPublishPage,
    SettingPage,
    SetAboutPage,
    SetHelpPage,
    InfoPage,
    InfoMessagePage,
    AppSettingPage,
    PersonPage,
    PertainHomePage,
    PertainAboutPage,
    MapPage,
    PayPage,
    FixPage,
    TalkPage,
    PaymoneyPage,
    MymesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
