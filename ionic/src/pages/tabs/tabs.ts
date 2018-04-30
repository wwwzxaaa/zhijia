import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PublishPage } from '../publish/publish';
import { SettingPage } from '../setting/setting';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PublishPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = SettingPage;

  constructor() {

  }
}
