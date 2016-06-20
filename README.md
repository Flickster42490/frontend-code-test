DataScience's Frontend Code Test
==================


## About

* This Recipe Table/Grocery List project is written with Angular, Node, Express. 
* It persists data locally using ngStorage module
* I chose to use Angular as the frontend framework over React because of it's simplicity in creating/updating tables/lists with its two-way binding. 
* Even though it's a simple microapp, I usually try to adhere to the Single-responsiblity principle, so I've decoupled the controllers, services, and views. 

## Check it out here

* You can access the project through the instructions below or head on over to [letsgoshopping.herokuapp.com](http://letsgoshopping.herokuapp.com). (FYI, it might be a bit slow since it's hosted on a free dyno on Heroku)

## Instructions to run locally

1. In your terminal, navigate to the root folder `frontend-code-test`
2. To Install dependencies, make sure you have npm, bower, and node installed globally. 
* Run `npm install`
* Run `bower install`
3. Run `node server.js`
4. In your browser, navigate to [localhost:8080](http://localhost:8080).

##Requirements

Using the provided JSON data representing a collection of meal recipes, create a micro frontend application that meets the following criteria:
* Display a list (or table) of recipes.
* Allow filtering of recipes by a single ingredient.
* Add checkboxes to allow selection of multiple recipes.
* Show an alphabetically ordered list of distinct ingredients for the selected recipes. This should update as recipes are selected / unselected.
* Persist the selections locally and regenerate the view on page refresh.
* In a README note any required setup to be able to run the app, such as modifying hosts file, etc.
