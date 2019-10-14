import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

import { RecipesService } from 'src/app/services/recipes.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  private _currentRecipeId: number;

  public get selectedRecipe(): Recipe {
    return this.recipesService.recipes[this._currentRecipeId];
  }

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private currentRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentRoute.params.subscribe((params: Params) => {
      this._currentRecipeId = params.id;
    });
  }

  onSaveToShoppingListClick() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onRecipeDelete() {
    const deleteAllowed = confirm(
      `Are you sure to delete recipe for ${this.selectedRecipe.name}?`
    );

    if (deleteAllowed) this.recipesService.deleteRecipe(this._currentRecipeId);

    this.router.navigate(['/recipes']);
  }
}
