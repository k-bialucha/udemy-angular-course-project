import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipesService } from 'src/app/services/recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from 'src/app/shared/recipe.model';

const AMOUNT_REGEX: RegExp = /^[1-9]+[0-9]*$/;

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
    private router: Router,
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
      ingredient =>
        new FormGroup({
          name: new FormControl(ingredient.name, Validators.required),
          amount: new FormControl(ingredient.amount, [
            Validators.required,
            Validators.pattern(AMOUNT_REGEX),
          ]),
        })
    );

    this.form = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredients: new FormArray(ingredientsFormControls),
    });
  }

  onSubmit() {
    const recipe = <Recipe>this.form.value;

    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, recipe);
    } else {
      this.recipesService.addRecipe(recipe);
    }

    this.leaveEditForm();
  }

  addIngredient() {
    const emptyIngredientFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl(1, [
        Validators.required,
        Validators.pattern(AMOUNT_REGEX),
      ]),
    });

    (<FormArray>this.form.get('ingredients')).push(emptyIngredientFormGroup);
  }

  leaveEditForm() {
    this.router.navigate(['../']);
  }
}
