import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Cottage Pudding", "Tastes like my childhood!", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg", [new Ingredient("Flour", 1), new Ingredient("Milk", 1)]),
        new Recipe("Cottage Pudding", "Tastes like my childhood!", "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812_1280.jpg", [new Ingredient("Flour", 1), new Ingredient("Milk", 1)])
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); //slice returns a new array that is an exact copy - prevents direct access to the reference type
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}