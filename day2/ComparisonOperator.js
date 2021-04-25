// ## Comparison

// ### == and ===

// There are three ways to use the `=` symbol: assignment, simple equality, and strict equality:


var test = "5"; // we assign the value "5": be careful, this is a string!
test == 5; // "5" == 5 will give true because only the value is tested
test === 5; // "5" === 5 will give false because "5" is a string, 5 is a number

// Generally, do not use == as it gives imprecise results. Get in the habit of testing if two values are equal with the operator === because it is strict and precise, you will have fewer errors

// ### Comparison operators

// As in mathematics, there are comparison operators such as:

// > strictly superior
// < strictly lower
// >= greater than or equal
// <=  less than or equal
// == equal to
// === strictly equal to
// != Different from
// !== strictly different from

// As for the equality operators, we prefer to use `! ==` rather than `! =` To avoid errors.


// ### && ("AND")

// Sometimes we need to test several conditions to execute a block of code:


var age = 15;

if (age> 12 && age <18) {
console.log ("you're a teenager!");
} else {
console.log ("you're too old ... or too young!");
}


// ### || ("OR")

// You can also sometimes want the code to execute if at least one of the conditions is true:


var phoneBrand = "samsung"
var computerBrand = "apple"

if (phoneBrand === "apple" || computerBrand === "apple") {
console.log ("you have at least one apple product!");
}


// ### Combinations

// You will sometimes have to test complex conditions, do not hesitate to combine the operators!


var isSunny = false;
var motivation = 100;
var workToDo = "none";

if (isSunny === true || (motivation === 100 && workToDo === "none")) {
console.log ("Let's go to the park!")
}

// the console.log will run
