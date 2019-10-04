import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }

  onRecipeClicked(index: number) {
    this.recipesService.changeSelectedRecipe(index);
  }
}
