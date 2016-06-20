RecipeApp.controller('TableCtrl', ['$scope', 'RecipeTableService', 'uiGridConstants', '$filter', '$localStorage', '$rootScope', function($scope, RecipeTableService, uiGridConstants, $filter, $localStorage, $rootScope) {
  
  $scope.storage = $localStorage;
  var defaultTemplate = '<span id="defaultText">{{row.entity[col.field]}}</span>';
  //initial ui-grid options
  $scope.recipeGridOptions = {
    enableGridMenu: false,
    enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
    enableVerticalScrollbar: uiGridConstants.scrollbars.NEVER,
    enableColumnResizing: true,
    selectWithCheckboxOnly: true,
    rowHeight: 50,
    columnDefs: [
      { field: 'Add', enableColumnMenu: false, enableSorting: false, width: 50, cellTemplate: '<input id="checkbox" type="checkbox" ng-model="row.entity[col.field]" ng-change="grid.appScope.addRecipes(row)">' },
      { field: 'name', enableColumnMenu: false, width: 100, sort: { direction: uiGridConstants.ASC, priority: 1 }, cellTemplate: defaultTemplate },
      { field: 'type', enableColumnMenu: false, width: 120, cellTemplate: defaultTemplate },
      { field: 'cook_time', enableColumnMenu: false, width: 100, cellTemplate: '<span id="defaultText">{{row.entity[col.field]}} mins</span>' },
      { field: 'ingredients', enableColumnMenu: false, cellTemplate: '<div id="ingredientText"><span ng-repeat="ingredient in row.entity[col.field]">{{ingredient}} / </span></div>' }
    ]
  };
  //watch for recipe filter Input
  $scope.$watch('ingSearch', function(val) {
    $scope.recipeGridOptions.data = RecipeTableService.recipeFilter($scope.originalRecipes, val);
  });

  $scope.addRecipes = function(row) {
    $scope.recipeGridOptions.data.forEach(function(recipe) {
      if (recipe.name === row.entity.name) {
        recipe = row.entity;
      }
    })
    //store updated checked value in cache
    $scope.storage.recipeGridOptionsData = $scope.recipeGridOptions.data;
    //call fn to update groceryList
    $rootScope.getGroceryList();
  };

  //check localstorage for a cached version of the original recipe and gridOptions data. If not found, use $http request. 
  $scope.checkStorageInit = function() {
    if ($scope.storage.originalRecipes && $scope.storage.recipeGridOptionsData) {
      $scope.originalRecipes = $scope.storage.originalRecipes;
      $scope.recipeGridOptions.data = $scope.storage.recipeGridOptionsData;
    } else {
		  RecipeTableService.getRecipes.then(function(recipes) {
		    //store in cache
		    $scope.storage.originalRecipes = recipes;
		    $scope.storage.recipeGridOptionsData = recipes;

		    $scope.originalRecipes = recipes;
		    $scope.recipeGridOptions.data = recipes;
		  });
    }
		if ($scope.storage.checkedIngredients) {
			$scope.checkedIngredients = $scope.storage.checkedIngredients;
		} 
  }

}]);
