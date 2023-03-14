import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeDishPage } from '../home-dish/home-dish.page';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home-dish',
    loadChildren: () => import('../home-dish/home-dish.module').then(m => m.HomeDishPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
