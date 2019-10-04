import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {}

  onRecipeClick() {
    this.recipesService.recipeSelectedEmitter.emit(this.recipe);
  }
}
