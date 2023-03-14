import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MyHeaderComponent } from './../my-header/my-header.component';
import { HomePageRoutingModule } from './home-routing.module';
import { HomeDishPageModule } from '../home-dish/home-dish.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomeDishPageModule
  ],
  declarations: [HomePage, MyHeaderComponent]
})
export class HomePageModule { }
