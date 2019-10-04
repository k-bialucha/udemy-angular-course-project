import { EventEmitter } from '@angular/core';

import { Recipe } from '../shared/recipe.model';

export class RecipesService {
  private _recipes: Recipe[] = [
    new Recipe(
      'The Test Recipe',
      'tasty recipe',
      'https://66.media.tumblr.com/5f2a764b3d3a30180243f6f8071a59a6/tumblr_oywfmxecrX1w466nko1_500.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'super tasty recipe',
      'https://upload.wikimedia.org/wikipedia/commons/c/c5/Korean_food-Tasty_ramyeon-03.jpg'
    ),
  ];
  recipeSelectedEmitter: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  // private _selectedRecipeId: number = 1;

  // public get selectedRecipe(): Recipe {
  //   return this.recipes[this._selectedRecipeId];
  public get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  selectedRecipe = null;

  constructor() {}

  changeSelectedRecipe(id: number) {
    this.selectedRecipe = this.recipes[id];
  }
}
