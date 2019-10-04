import { Injectable } from '@angular/core';

import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [
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

  // private _selectedRecipeId: number = 1;

  // public get selectedRecipe(): Recipe {
  //   return this.recipes[this._selectedRecipeId];
  // }

  selectedRecipe = null;

  constructor() {}

  changeSelectedRecipe(id: number) {
    this.selectedRecipe = this.recipes[id];
  }
}
