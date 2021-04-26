// ## 01 - Array

// - Create a variable `fruits` which will contain an array with the values` "mango" `,` "lemon" `and` "blueberry" `
// - Display `fruits` in the console
// - Bonus: try `console.table (fruits)`

var fruit = ["mango", "lemon", "blueberry"];
console.log (fruit);
console.table (fruit);

// ## 02 - Access

// - Create an `ingredients` variable which will contain an array with the values` "eggs" `,` "milk" `and` "butter" `
// - Show `" milk "` in the console
// - Show the index of `" butter "` in the console

var ingredients = ["egg", "milk", "butter"]
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// ## 03 - Add and Remove

// - Create a variable `objects` which will contain an array with the values` "pen" `,` "book" `and` "lamp" `
// - Add `" chair "` to the start of the table then display the result
// - Remove `" lamp "` then display the result
// - Add `" laptop "` at the end of the table then display the result
// - Remove `" chair "` then display the result

var object =["pen", "book", "lamp"]

object.unshift("chair");
console.log(object);

object.pop("lamp")
console.log(object);

object.push("laptop");
console.log(object);

object.shift("chair");
console.log(object);

// ## 04 - Order

// - Create a variable `numbers` which will contain an array with the values` 4`, `10`,` 8`, `12` and` 6`
// - Reverse the order of the elements of `numbers` then display the result
// - Arrange the elements of `numbers` in ascending order then display the result


var number = [4, 10, 8, 12, 6];
number.reverse();
console.log(number);

number.sort((a, b) => a - b)
console.log(number);


number.sort((a, b) => b - a)
console.log(number);

// ## 05 - Loop

// - Create a variable `total` of value` 0` and a variable `limit` of value` 10`
// - Using a for loop going from`0` to `limit`, increase the value of` total` by adding the value of `i` to it (i is the index of your loop)
// - Display the value of `total` after your loop, total must be 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

var total = 0;
var limit = 10;

for(var i = 0; i <= limit; i ++) {
    total = total + i;
    console.log(total);
}
console.log(total);




// ## 06 - Reverse

// - Create a variable `sentence` equal to" Hello Konexio! "
// - Using a for loop and without using the .reverse () function, make sure to display the inverse of your variable `sentence` ("! OixenoK olleH ")

var sentence = "Hello konexio!";
var result = sentence.split("");
console.log(result);
var reversetext = [];
for(var i = 0; i<=result.length; i++) {
    reversetext.unshift(result[i]);
    console.log(reversetext)
}
var finalText = reversetext.join("");
console.log(finalText);


// ## ⭐ Bonus

// - Create a loop that starts from 0 and ends at 100
// - At each iteration:
// - If `i` is a multiple of 3 ⇒ print" fizz "
// - If `i` is a multiple of 5 ⇒ print" buzz "
// - If `i` is a multiple of 3 and 5 ⇒ print" fizzbuzz "
// - If `i` is a multilple of 7 ⇒ don't print it
// - Otherwise, display the value of i

for(var i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if(i % 3 === 0) {
        console.log("fizz");
    } else if(i % 5 === 0) {
        console.log("buzz");
    } else if(i % 7 === 0) {
        console.log();
    } else{
        console.log(i);
    }
}

// ## ⭐ Bonus II

// - Repeat exercise 5 with a while loop
var total = 0;
var limit = 10;
var i = 0; 
while(i <= limit) {
    total = total + i;
    console.log(total);
    i ++;
}
console.log(total);
// ## ⭐ Bonus III

// - Create a table with the name of each of your classmates
// - Randomly display the name of the person drawn at random


var promo = ["a", "b", "c", "d"];
var min = 0;
var max = promo.length - 1;
var random = Math.floor(Math.random() * max - min + 1);
console.log(promo[random]);

// ## ⭐⭐ Bonus IV

// - Create an empty array
// - With a for loop, add 20 random integers between 0 and 100
// - Display this table
// - With a second for loop, find the largest integer in your array (not allowed to use Math.max)

var array = [];
var min = 0;
var max = 100;
for(var i = 0; i < 20; i++) {
    var random = Math.floor(Math.random() * (max - min + 1))
    array.push(random)
    console.log(random);
}

var arrayMax = array[0];
for(var i = 1; i <= 20; i ++) {
    if(array[i] > arrayMax) {
        arrayMax = array[i]
    }
}
console.log("ArrayMax", arrayMax);
