import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: true }) form: NgForm;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  private _subscription: Subscription;

  editedItemIndex: number = null;

  public get editMode(): boolean {
    return this.editedItemIndex !== null;
  }

  public get editedItem(): Ingredient {
    return this.shoppingListService.getIngredient(this.editedItemIndex);
  }

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this._subscription = this.shoppingListService.startedItemEditing.subscribe(
      index => {
        this.editedItemIndex = index;
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onAddOrUpdateItem(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;

    const ingredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        ingredient
      );
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }

    this.clearForm();
  }

  clearForm() {
    this.form.reset();
    this.editedItemIndex = null;
  }
}
