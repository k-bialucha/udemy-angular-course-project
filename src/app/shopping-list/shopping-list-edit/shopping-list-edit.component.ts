import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  // @ViewChild('form', { static: true }) form: NgForm;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    // this.form.valueChanges.subscribe(value => {
    //   console.log('some changes', value);
    // });
  }

  onAddItem(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;

    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
