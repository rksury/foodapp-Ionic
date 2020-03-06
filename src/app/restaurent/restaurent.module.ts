import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurentPageRoutingModule } from './restaurent-routing.module';

import { RestaurentPage } from './restaurent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurentPageRoutingModule
  ],
  declarations: [RestaurentPage]
})
export class RestaurentPageModule {}
