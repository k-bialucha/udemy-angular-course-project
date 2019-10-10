import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  form: FormGroup;

  get controls() {
    return (this.form.get('ingredients') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = !!params.id;

      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '',
      recipeImagePath = '',
      recipeDescription = '',
      recipeIngredients: Ingredient[] = [];

    if (this.editMode) {
      const recipe = this.recipesService.recipes[this.id];
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) recipeIngredients = recipe.ingredients;
    }

    const ingredientsFormControls: FormGroup[] = recipeIngredients.map(
      ingredient => {
        return new FormGroup({
          name: new FormControl(ingredient.name),
          amount: new FormControl(ingredient.amount),
        });
      }
    );

    this.form = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
      ingredients: new FormArray(ingredientsFormControls),
    });
  }

  onSubmit() {
    console.warn('RecipeEdit form submit', this.form.value);
  }
}
