import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  form: FormGroup;

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
      recipeDescription = '';

    if (this.editMode) {
      const recipe = this.recipesService.recipes[this.id];
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
    }

    this.form = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.warn('RecipeEdit form submit', this.form.value);
  }
}
