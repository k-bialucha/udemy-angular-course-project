import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
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
  // @ViewChild('form', { static: true }) form: NgForm;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  private _subscription: Subscription;

  editedItemIndex: number = null;

  public get editMode(): boolean {
    return this.editedItemIndex !== null;
  }

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    // this.form.valueChanges.subscribe(value => {
    //   console.log('some changes', value);
    // });
    this._subscription = this.shoppingListService.startedItemEditing.subscribe(
      index => {
        this.editedItemIndex = index;
      }
    );
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;

    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
