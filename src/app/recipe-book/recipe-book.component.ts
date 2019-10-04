import { Component, OnInit } from '@angular/core';

import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipesService],
})
export class RecipeBookComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
