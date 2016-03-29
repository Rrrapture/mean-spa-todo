// Import module to provide an app `store` for the life-cycle of the app
import {provideStore} from '@ngrx/store';

// Import all of the files necessary for our `recipes` component
import {RecipeService} from '../../app/recipes/recipe.service';
import {recipes} from '../../app/recipes/recipes.reducer';
import {selectedRecipe} from '../../app/recipes/selected-recipe.reducer';

//# Application Providers/Directives/Pipes
//
//** providers/directives/pipes that only live in our browser environment **
export const APPLICATION_STORES = [
  // These are the primary consumers of our app store
  RecipeService,
  // Inititialize app store available to entire app
  // and pass in our reducers.
  // Notice that we are passing in an object that matches the
  // `AppStore` interface
  provideStore({ recipes, selectedRecipe })
];

export const STORES = [
  ...APPLICATION_STORES
];
