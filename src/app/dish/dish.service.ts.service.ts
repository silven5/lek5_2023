import { LogService } from './../logger/log.service.ts.service';
import { Injectable, Optional } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DishService {
  private dish: string[] = [ "Грибний суп", "Шарлотка",  "Омлет"];

  getData(): string[] {
    //Якщо сервіс створено
    if (this.logService) this.logService.write("Операція отримання даних");
      return this.dish;
  }
  addData(name: string){
    //Якщо сервіс створено
    if (this.logService) this.logService.write("Операція додавання даних");
      this.dish.push(name);
  }
  constructor(@Optional() private logService: LogService) { }
}
