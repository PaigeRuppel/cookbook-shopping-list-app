import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg"),
    new Recipe("Pineapple Dream Cake", "Try not to eat this all in one sitting...", "https://www.mastercook.com/app/Image/4481967/1726997.jpg"),
    new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
