import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
})
export class RecipeListItemComponent implements OnInit {
  @Input() id: number;
  @Input() recipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
