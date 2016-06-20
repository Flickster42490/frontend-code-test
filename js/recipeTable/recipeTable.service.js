RecipeApp.service('RecipeTableService', ['$http', function($http) {
  this.getRecipes = $http.get('recipes.json').then(function(response) {
  	//set the default checkbox column values
  	response.data.forEach(function(recipe){
  		recipe.Add = false;
  	})
    return response.data;
  });

  this.recipeFilter = function(items, value) {
    if (!value) {
      return items;
    }
    //titleCase the search results
    var value = value.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    //return the recipe if the search result matches any ingredients
    return items.filter(function(recipe) {
      var availableRecipe = _.filter(recipe.ingredients, function(ingredient) {
        return ingredient.indexOf(value) !== -1;
      });
      if (availableRecipe.length > 0) {
        return recipe;
      }
    })
  }

}])
