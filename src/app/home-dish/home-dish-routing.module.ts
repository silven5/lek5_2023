import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeDishPage } from './home-dish.page';

const routes: Routes = [
  {
    path: '',
    component: HomeDishPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeDishPageRoutingModule {}
