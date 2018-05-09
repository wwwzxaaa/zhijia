import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishCommentPage } from './publish-comment';

@NgModule({
  declarations: [
    PublishCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishCommentPage),
  ],
})
export class PublishCommentPageModule {}
