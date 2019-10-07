import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

import { RecipesService } from 'src/app/services/recipes.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentRoute.params.subscribe((params: Params) => {
      const currentRecipeId = +params.id;

      this.selectedRecipe = this.recipesService.recipes[currentRecipeId];
    });
  }

  onSaveToShoppingListClick() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
