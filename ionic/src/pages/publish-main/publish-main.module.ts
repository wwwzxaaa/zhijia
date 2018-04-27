import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishMainPage } from './publish-main';

@NgModule({
  declarations: [
    PublishMainPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishMainPage),
  ],
})
export class PublishMainPageModule {}
