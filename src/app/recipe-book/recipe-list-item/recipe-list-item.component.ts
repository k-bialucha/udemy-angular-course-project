import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output('recipeClicked') recipeClickEmitter: EventEmitter<
    void
  > = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onRecipeClick() {
    this.recipeClickEmitter.emit();
  }
}
