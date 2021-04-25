// ## 01 - Number

// - Create an `integer` variable and give it the value` 102`
// - Create a variable `float` and give it the value` 13.9` (use the point for decimals when coding!)
// - Display in the console

var integer = 102;
var float = 13.9;

console.log(integer)
console.log(float);

// ## 02 - Convert

// - Create a variable `basic` of value` 34`
// - Create a `stringified` variable which contains the string version of` basic`
// - Display `stringified` in the console

// If unfortunately, the trainer forgot this part in the lesson, consider either watching the lesson on numbers or asking him

var basic = 34;
var stringified = basic.toString();
console.log(stringified)



// ## 03 - Round

// - Create a variable `num` of value` 1.5`
// - Create a `rounded` variable which contains the rounding of` num`
// - Display `rounded` in the console

var num = 1.4;
var rounded = Math.round(num);
console.log(rounded);

// ## 04 - Arithmetic

// - Create a variable `test` of value` 12` and a variable `bis` of value` 5`
// - Use all arithmetic operators on these variables and display the results


// console.log (test + bis); // will return 17

var test = 12;
var bis = 5;
var sum = test + bis;
console.log("Sum ", sum);

var Sub = test - bis;
console.log("Sub ", Sub);


var multiple = test * bis;
console.log("Multiple ", multiple);

var moduler = test % bis;
console.log("Moduler ", moduler);

var divide = test / bis;
console.log("Divide ", divide);

// ## 05 - Comparison

// - Create a variable `test` of value` 143` and a variable `bis` of value` 219`
// - Use all comparison operators with these variables and display the results


// console.log (test> bis); // will return false

var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis);



// ## 06 - Condition

// - Create a variable `limit` of value` 50` and a variable `score` of value` 64`
// - Create a condition: if the score is greater than or equal to the limit, display "Ok good!", Otherwise display "Oh nooo ..."
// - Change the score value to change the result

var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Ok Good !")
} else {
    console.log("Oh nooo ....")
}

// ## 07 - Condition II

// - Create a `password` variable with the value` "azerty" `
// - Using a condition, display "The password is secure" if `password` has a length greater than 5

var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure")
} else {
    console.log("The password is not secure")
}

// ## 08 - Condition III

// - Combine the two previous conditions (exercises 6 and 7)
// - Display "Everything is good" if both conditions are true
// - Display "Something is good" if one of the two conditions is true
// - Display "Nothing is good" if neither of the two conditions is true
if (score >= limit && password.length > 5) {
    console.log("Everything is good")
} else if (score >= limit || password.length > 5) {
    console.log("Something is good")
} else {
    console.log("Nothing is good")
}

// ## ⭐ Bonus

// - Create a variable `random` which contains a random value between 1 and 6 (whole numbers only)
// - Using a condition, display "Yes I win!" if `random` is equal to 6, and" So close ... "in the other cases

var max = 6;
var min = 1;
var random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);
if (random === 6) {
    console.log("Yes I Win !")
} else if (random === 5) {
    console.log("So Close !")
} else {
    console.log("Try again !")
}
// ## ⭐ Bonus II

// - Create a `month` variable with the value` "January" `
// - Using a switch, display "Winter", "Spring", "Summer" or "Fall" depending on the value of the month
// - Change the value of `month` to change the result
var month = "August"
switch (month) {
    case "January":
    case "February":
    case "March": {
        console.log("Winter");
        break;
    }
    case "April":
    case "May":
    case "June": {
        console.log("Spring");
        break;
    }
    case "July":
    case "August":
    case "September": {
        console.log("Summer");
        break;
    }
    case "October":
    case "November":
    case "December": {
        console.log("Fall");
        break;
    }
    default:
        console.log("That's not a Month");
}
// ## ⭐⭐ Bonus III

// - Create a variable `roundedNumber` of value` 3.6`
// - Using only `Math.floor ()`, `Math.ceil ()`, math operations and an `if () {} else {}` reproduce the result of `Math.round ()`
// - Change the value of `roundedNumber` (with 3.3, 3.8 and 12.4) to change the result

var roundedNumber = 3.4;
var decimalValue = roundedNumber - Math.floor(roundedNumber)
console.log("Decimal Value is ", decimalValue);
var result = null;
if(decimalValue >= 0.5) {
    result = Math.ceil(roundedNumber)
}else {
    result = Math.floor(roundedNumber)
}
console.log(result)
// ## ⭐⭐⭐ Bonus IV

// - We will start to do things a little more concrete (and suddenly more complicated!) And to program an artificial intelligence (word which is scary but do not worry)
// - Start by creating an account on [CodinGame] (https://www.codingame.com/) and share your nickname with your favorite trainer
// - Try to solve the following problem: [Thor vs Thunder] (https://www.codingame.com/ide/puzzle/power-of-thor-episode-1)