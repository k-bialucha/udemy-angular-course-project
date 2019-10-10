import { Recipe } from '../shared/recipe.model';

import { createSchnitzel, createRamen } from '../shared/recipeCreators';
import { Subject } from 'rxjs';

export class RecipesService {
  public recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  private _recipes: Recipe[] = [createSchnitzel(), createRamen()];

  public get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this._recipes[index] = recipe;
    this.recipesChanged.next(this.recipes);
  }
}
