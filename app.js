/* (function(){
    "use strict";
}()); */

const numberOfFilms = +prompt("How many movies have you seen?");

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

console.log(personalMovieDB);