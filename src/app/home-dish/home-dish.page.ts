import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { DishesService } from './../shared/dishes.service';
import { Dish } from '../shared/dish'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs/internal/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-home-dish',
  templateUrl: './home-dish.page.html',
  styleUrls: ['./home-dish.page.scss'],
})
export class HomeDishPage implements OnInit {
  edit = false;
  id!: number;
  dish: Dish = new Dish();
  // Масив страв
  Dishings!: Array<Dish>;
  constructor(private dService: DishesService) { }

  ngOnInit() {
    this.fetchDish();
    let dishRes = this.dService.getDishList();
    let i = 0;
    dishRes.snapshotChanges().subscribe(res => {
      this.Dishings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        this.Dishings.push(a as Dish);
      })
    })
  }
  fetchDish() {
    this.dService.getDishList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteDishing(id: number) {

    if (window.confirm('Do you really want to delete?')) {
      this.dService.deleteDish(id + 1)
    }
  }
  editDishtoggle(id: number) {
    this.edit = true;
    this.dish = new Dish();
    this.id = id;
    this.dish.name = this.Dishings[this.id].name;
    this.dish.price = this.Dishings[this.id].price;
  }
  update(name: any, price: any) {
    this.dish.name = name;
    this.dish.price = price;
    this.id = this.id + 1;
    this.dService.updateDishg(this.id, this.dish);
    this.edit = false;
  }
}
