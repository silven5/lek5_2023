import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDishPageRoutingModule } from './home-dish-routing.module';

import { HomeDishPage } from './home-dish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDishPageRoutingModule
  ],
  declarations: [HomeDishPage]
})
export class HomeDishPageModule { }
