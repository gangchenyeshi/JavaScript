// ### Random

// The Math.random () method generates a random number between 0 and 1:


var test = Math.random ();


// To obtain a random number between a floor and a chosen ceiling, there is this formula:


var min = 1;
var max = 10;

var randomNumber = Math.floor (Math.random () * (max - min + 1) + min); // will give a random number between 1 and 10
console.log("Random Number between 1 to 10", + randomNumber);

console.log(Math.floor (Math.random () * (100 - 20 + 1) + 20)); // will give a random number between 20 and 100
