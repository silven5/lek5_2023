import { Dish } from './dish';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  dishListRef!: AngularFireList<any>;
  dishRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  // Create
  createDish(dish: Dish) {
    return this.dishListRef.push({
      name: dish.name,
      price: dish.price
    })
  }

  // Get Single
  getDish(id: string) {
    this.dishRef = this.db.object('/dish/' + id);
    return this.dishRef;
  }

  // Get List
  getDishList() {
    this.dishListRef = this.db.list('/dish');
    return this.dishListRef;
  }

  // Update
  updateDishg(id: number, dish: Dish) {

    this.dishRef = this.db.object('/dish/' + id);
    return this.dishRef.update({
      name: dish.name,
      price: dish.price
    })
  }

  // Delete
  deleteDish(id: number) {
    this.dishRef = this.db.object('/dish/' + id);
    this.dishRef.remove();
  }
}
