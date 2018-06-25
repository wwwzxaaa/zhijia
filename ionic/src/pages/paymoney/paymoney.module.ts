import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymoneyPage } from './paymoney';

@NgModule({
  declarations: [
    PaymoneyPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymoneyPage),
  ],
})
export class PaymoneyPageModule {}
