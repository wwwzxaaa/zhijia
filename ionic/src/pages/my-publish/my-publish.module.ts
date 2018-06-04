import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPublishPage } from './my-publish';

@NgModule({
  declarations: [
    MyPublishPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPublishPage),
  ],
})
export class MyPublishPageModule {}
