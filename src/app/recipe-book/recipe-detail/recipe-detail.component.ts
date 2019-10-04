import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.recipeSelectedEmitter.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
