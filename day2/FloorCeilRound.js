// Floor and Ceil

// These two methods make it possible to obtain rounding at the "floor" or "ceiling" (to the whole below or to the whole above) when a decimal number is passed to them as a parameter:

var float = 3.14;
var otherFloat = 16.80;

Math.floor (otherFloat); // will give 16 even if the "natural" rounding would be 17
console.log(Math.floor (otherFloat));

Math.ceil (float); // will give 4 even if the "natural" rounding would be 3
console.log(Math.ceil (float));


// ### Round

// The method ** Math.round (a) ** gives the "natural" rounding (to the nearest integer):

Math.round (2.5); // gives 3
Math.round (2.4); // gives 2
console.log(Math.round(2.4));

console.log(Math.round(2.5));