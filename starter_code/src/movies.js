/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let ratingsSum = 0;
  for (i = 0; i < arr.length; i++) {
    ratingsSum += parseFloat(arr[i].rate);
  }
  return parseFloat((ratingsSum / arr.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var ratingsSum = 0;
  var dramaCounter = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].genre.includes(`Drama`) == true) {
      ratingsSum += parseFloat(arr[i].rate);
      dramaCounter++;
    }
  }
  if (dramaCounter > 0) {
    return parseFloat((ratingsSum / dramaCounter).toFixed(2));
  } else {
    return 0;
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// function orderByDuration(arr) {
//     let ascendingArr = [];

//     for (i = 0; i < arr.length; i++) { }
// }

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let counter = 0;

  for (i = 0; i < arr.length; i++) {
    if (
      movies[i].genre.includes("Drama") &&
      movies[i].director === "Steven Spielberg"
    ) {
      counter++;
    }
  }
  return counter;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
