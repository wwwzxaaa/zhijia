import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishNewPage } from './publish-new';

@NgModule({
  declarations: [
    PublishNewPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishNewPage),
  ],
})
export class PublishNewPageModule {}
