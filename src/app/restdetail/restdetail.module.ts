import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestdetailPageRoutingModule } from './restdetail-routing.module';

import { RestdetailPage } from './restdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestdetailPageRoutingModule
  ],
  declarations: [RestdetailPage]
})
export class RestdetailPageModule {}
