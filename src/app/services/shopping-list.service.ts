import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  private _eventEmitter: EventEmitter<void> = new EventEmitter();

  public get ingredients(): Ingredient[] {
    return [...this._ingredients];
  }
  public get subscribeToUpdate() {
    return (handler: () => void) => this._eventEmitter.subscribe(handler);
  }

  constructor() {}

  addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
    this._eventEmitter.emit();
  }
}
