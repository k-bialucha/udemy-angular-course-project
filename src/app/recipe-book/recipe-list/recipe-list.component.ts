import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'The Test Recipe',
      'tasty recipe',
      'https://66.media.tumblr.com/5f2a764b3d3a30180243f6f8071a59a6/tumblr_oywfmxecrX1w466nko1_500.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'super tasty recipe',
      'https://66.media.tumblr.com/5f2a764b3d3a30180243f6f8071a59a6/tumblr_oywfmxecrX1w466nko1_500.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
