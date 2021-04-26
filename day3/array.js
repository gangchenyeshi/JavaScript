
// ARRAY
// An array (** array **) is a list of values. Each element inside the array has an ** index ** (the position of the element in the array):


var elements = ["water", "fire", "earth", "wind"];

console.log(elements)
// An array can contain all kinds of values: strings, numbers, booleans, functions, objects, other arrays ...

// ## Length of an array

// As with strings, it is possible to measure the length of an array to find out how many elements it contains. We also use the same syntax:

var test = [1, 2, 3, 4, 5];

console.log (test.length) // will return 5

// ## Access the values of an array

// The index of the first element of an array is always 0. The index of the last element is therefore equal to the length of the array minus one. We use the syntax `array [index]`:


var ingredients = ["eggs", "flour", "butter", "milk"];

console.log (ingredients [0]); // will return "eggs"
console.log (ingredients.length) // will return 4
console.log (ingredients [3]); // will return "milk"


// Do you know what also starts from 0? The iterations of the `for` loops of course! These loops will be very useful for you to iterate over any element with an index (index, i ... that was fate!)

