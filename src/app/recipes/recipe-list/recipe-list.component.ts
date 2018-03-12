import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg"),
    new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg"),
    new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
