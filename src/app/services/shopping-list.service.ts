import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  private _eventEmitter: Subject<void> = new Subject();
  startedItemEditing: Subject<number> = new Subject();

  public get ingredients(): Ingredient[] {
    return [...this._ingredients];
  }
  public get subscribeToUpdate() {
    return (handler: () => void) => this._eventEmitter.subscribe(handler);
  }

  constructor() {}

  getIngredient(index: number) {
    return this._ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.addIngredients([ingredient]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this._ingredients.push(...ingredients);
    this._eventEmitter.next();
  }
}
