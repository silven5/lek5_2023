import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-home-dish',
  templateUrl: './home-dish.page.html',
  styleUrls: ['./home-dish.page.scss'],
})
export class HomeDishPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  component = HomePage;
}
