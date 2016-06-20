RecipeApp.service('GroceryListService', ['$http', function($http) {
  this.uniqueIngredients = function(recipeArray){
    var uniq = [];
    var filteredRecipes = [];
    //filter array based on checked value
    recipeArray.forEach(function(recipe) {
      if(recipe.Add === true) {
        filteredRecipes.push(recipe);
      }
    });
    //return empty array when no recipes are checkboxed.
    if(filteredRecipes.length === 0) {
      return [];
    }
    
    filteredRecipes.forEach(function(recipe) {
      if(uniq.length === 0) {
        uniq = recipe.ingredients;
      } else {
        uniq = _.union(uniq, recipe.ingredients);
      }
    })
    return uniq.sort();
  }
}])
