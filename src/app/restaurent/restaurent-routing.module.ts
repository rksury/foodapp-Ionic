import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurentPage } from './restaurent.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurentPageRoutingModule {}
