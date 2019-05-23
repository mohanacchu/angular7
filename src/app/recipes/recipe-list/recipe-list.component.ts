import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
  new Recipe('A test recipe','This is simply a test','https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/sausage-mustard-apple-hash.jpg'),
  new Recipe('A veg recipe','This is simply a veg','https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
  new Recipe('A non-veg recipe','This is simply a non-veg','https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1024/landscape-1503418862-chicken-thighs-delish.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
