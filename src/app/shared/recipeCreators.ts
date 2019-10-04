import { Recipe } from './recipe.model';
import { Ingredient } from './ingredient.model';

const schnitzelIngredients = [
  new Ingredient('egg', 1),
  new Ingredient('fries', 125),
  new Ingredient('meat', 7),
];

export const createSchnitzel = () =>
  new Recipe(
    'Some schnitzzel',
    'german food',
    'https://upload.wikimedia.org/wikipedia/commons/c/c6/Wiener_Schnitzel%21.jpg',
    schnitzelIngredients
  );

const ramenIngredients = [
  new Ingredient('eggs', 9),
  new Ingredient('water', 100),
  new Ingredient('meat', 9999),
];

export const createRamen = () =>
  new Recipe(
    'Ramen',
    'soup with everything you need',
    'https://upload.wikimedia.org/wikipedia/commons/c/c5/Korean_food-Tasty_ramyeon-03.jpg',
    ramenIngredients
  );
