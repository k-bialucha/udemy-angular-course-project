import { Recipe } from '../shared/recipe.model';

import { createSchnitzel, createRamen } from '../shared/recipeCreators';

export class RecipesService {
  private _recipes: Recipe[] = [createSchnitzel(), createRamen()];

  // private _selectedRecipeId: number = 1;

  // public get selectedRecipe(): Recipe {
  //   return this.recipes[this._selectedRecipeId];
  public get recipes(): Recipe[] {
    return this._recipes.slice();
  }
}
