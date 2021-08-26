/* (function(){
    "use strict";
}()); */

/* const numberOfFilms = +prompt("How many movies have you seen?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt("One of the last movies you have seen?");
const ratingOfMovie = +prompt("What  raiting  would you give to movie?");

const actor = prompt("Your favorite actor in this movies");
const role  = prompt("what whas his role there?");

personalMovieDB.movies[lastMovie] = ratingOfMovie;

personalMovieDB.actors[actor] = role;

console.log(personalMovieDB); */


const dishName = prompt("What's your favorite dish?");

const recipesTable = {
        name: dishName,
        ingredients:[],
        recipe: {},
        typeOfDish: ""
};

const numberOfRecipe = +prompt("Number of recipe");
const recipe = prompt("What's the recipe dish?");


const ingridi = ["potato","tomato", "chicken","pepper"];

recipesTable.ingredients = ingridi;
recipesTable.recipe[numberOfRecipe] = recipe;


console.log(recipesTable);

