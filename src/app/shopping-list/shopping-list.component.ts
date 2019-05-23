import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Banana', 15),
    new Ingredients('Pineapple', 8)
  ];

  constructor() { }

  ngOnInit() {
  }

}
