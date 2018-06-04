import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PertainHomePage } from './pertain-home';

@NgModule({
  declarations: [
    PertainHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PertainHomePage),
  ],
})
export class PertainHomePageModule {}
