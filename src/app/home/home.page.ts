import { Component } from '@angular/core';
import { DishService } from './../dish/dish.service.ts.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: string[] = [];
  name: string = "";
  constructor(private dishService: DishService) { }
  addItem(name: any) {
    if (typeof name === "string")
      this.dishService.addData(name.toString());
  }
  ngOnInit() {
    this.items = this.dishService.getData();
    console.log("Hello!");
  }

}
