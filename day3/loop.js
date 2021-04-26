// Loop
// Sometimes you need to repeat a piece of code a number of times. Rather than rewriting everything, we can use a loop and specify it:

// - or how many times this code must be executed.
// - or what is the condition for the loop to turn.

// It can happen that an error is made by the developer and that the loop can never stop: we speak of an infinite loop.



// ## while loop

// The `while` loop is used when we do not know the number of repetitions (** iterations **) necessary: ​​we execute the code until a stop condition is validated:


var finishLine = 100;
var athletePosition = 0;

while (ahtletePosition < finishLine) {
ahtletePosition ++;
}


// To explain simply, `while` loop is written at least as follows:


while (condition) {
              // this block is executed at each step
}


// - condition: as long as it is true, the condition continues to run

// You have to think about putting in place a way to make the condition invalid at a certain time, otherwise the loop will run endlessly! In the example, `athletePosition ++` allowed us to increase this value until the condition became false.



// ## for loop

// The `for` loop is used when we know the number of necessary steps (** iterations **): we program the loop to turn` x` times:


var goal = 20;

for (var i = 0; i <= goal; i ++) {
  console.log (i) // will return all numbers from 0 to 20!
}

// To explain simply, `for` loop is written at least as follows:


// for (start, condition, incrementation) {
//        // this block is executed at each step
// }


// - start: you have to define a variable (often called `i` for" iteration ") to count the steps. We can take any number but the most common is to start from zero: `var i = 0`
// - condition: at each step of the loop, this condition will be checked. As long as it is true, the loop spins and the code executes. When it becomes false, the loop stops. To count to 20, the number must be:
//     - less than 21: `i <21`
//     - less than or equal to 20: `i <= 20`
// - incrementation: at each step of the loop, the variable is incremented to go to the next step and not to remain in an infinite loop. We could write `i + 1`, but by convention we write` i ++ `

// If we wanted to create a loop that goes backwards instead of going forward, we would have to start from a value, go to 0 and do `i -`

// In general, this is the loop that we prefer to use because it is more secure: there is less risk that it will spin indefinitely!



// ## Break and Continue

// The `break` keyword is used to stop a loop, while the` continue` keyword is used to move to the next step without executing the entire block of code in the loop:


var menu = ["salad", "burger", "cheese", "dessert", "coffee"];

// I create a loop to eat, but I don't like cheese and I don't drink coffee ... How do I do this?

for (var i = 0; i <menu.length; i ++) {
if (menu [i] === "coffee") {
break; // stop before the console.log of "coffee"
}

if (menu [i] === "cheese") {
// keep on going; // skip the console.log of "cheese"
}

console.log (menu [i])
}

// return to :
// "salad"
// "burger"
// "dessert"


// ## Recursion

// The principle of recursion is sometimes complex to apply, but it is based on a simple concept.

// Recursion is another way of repeating steps until a condition is true. A recursive function will look a lot like a loop, with one detail: it will call itself!

// How not to start an infinite process? As in a loop, you will have to write a line of code that will allow the recursive function to approach a situation that will cause it to stop:


function countDown (number) {
if (number === 0) {
console.log (number + "finished!");
return;
}

console.log (number);
countDown (number -1);
}

countDown (5);

// return to :
// 5
// 4
// 3
// 2
// 1
// 0 finished!


// If the number is 0, then the function launches a last `console.log` then stops (thanks to the keyword` return`). Otherwise, it displays the current number and raises itself with a smaller number!