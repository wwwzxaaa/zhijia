import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MymesPage } from './mymes';

@NgModule({
  declarations: [
    MymesPage,
  ],
  imports: [
    IonicPageModule.forChild(MymesPage),
  ],
})
export class MymesPageModule {}
