import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishPage } from './publish';

@NgModule({
  declarations: [
    PublishPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishPage),
  ],
})
export class PublishPageModule {}
