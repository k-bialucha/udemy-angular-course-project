import { EventEmitter } from '@angular/core';

import { Recipe } from '../shared/recipe.model';

import { createSchnitzel, createRamen } from '../shared/recipeCreators';

export class RecipesService {
  private _recipes: Recipe[] = [createSchnitzel(), createRamen()];
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
