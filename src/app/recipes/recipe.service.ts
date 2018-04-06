import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg"),
        new Recipe("Cottage Pudding", "Tastes like my childhoodl", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg")
      ];

    getRecipes() {
        return this.recipes.slice(); //slice returns a new array that is an exact copy - prevents direct access to the reference type
    }
}