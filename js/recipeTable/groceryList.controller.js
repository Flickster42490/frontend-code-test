RecipeApp.controller('GroceryListCtrl', ['$scope', 'GroceryListService', '$localStorage', '$rootScope', function($scope, GroceryListService, $localStorage, $rootScope) {
  $scope.storage = $localStorage;
  //grab recipeGridOptionsData from cache and add scope reference
  //there should always be data in the cache in the $localStorage, because it is set during ng-init. 
  $scope.recipeGridOptions.data = $scope.storage.recipeGridOptionsData;

  $rootScope.getGroceryList = function(){
	  $scope.checkedIngredients = GroceryListService.uniqueIngredients($scope.recipeGridOptions.data);
	  //cache checkedIngredients
	  $scope.storage.checkedIngredients = $scope.checkedIngredients;
  }

}]);
