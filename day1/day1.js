//01- Hello World
console.log("Hello World !");

//02- String
// - In your file, create a variable `test`
// - Give it the value `" My name is xxx "` with your name instead of "xxx"
// - Then use the `console.log ()` function to display the `test` variable in the console
// - Then run the command to run the code

var test = "My Name is ABC";
console.log(test);

// 03 - Concatenation

// - In your file, create a variable `name`
// - Give it the value `" xxx "` with your name instead of "xxx"
// - Then use the `console.log ()` function to display the text "Nice to meet you" + the `name` variable in the console
// - Then run the command to run the code

var name = "Jack";
console.log("Nice to meet you " + name);

// 04 - String Length

// - Dans votre fichier, créez une variable `testLength`
// - Donnez lui la valeur `"I'm very long !"`
// - Utilisez ensuite la fonction `console.log()` pour afficher la longueur de `testLength`
// - Lancez ensuite la commande pour exécuter le code

var testLength = "I'm very long!";
console.log(testLength.length);

// 05 - Replace

// - In your file, create a variable `food`
// - Give it the value `" croissant is meh "`
// - Use the `.replace ()` method to replace "meh" with "so good"
// - Then use the `console.log ()` function to display the result in the console
// - Then run the command to run the code

// From now on, you will be given a few fewer hints in the exercises. It's up to you to find all the necessary steps, we will only tell you the basic instructions!

var food = "croissant is bad";
food = food.replace("bad", "good")

console.log(food);

// 06 - Upper and Lower case

// - Create a `basic` variable containing the value` "This is Cool" `
// - Create a variable `basicUp` containing the uppercase version of` basic`
// - Create a variable `basicDown` containing the lowercase version of` basic`
// - Show the three variables in the console

var basic = "This is Cool";
console.log(basic);
var upperCase = basic.toUpperCase();
console.log(upperCase);
var lowerCase = basic.toLowerCase();
console.log(lowerCase)

// ## 07 - Split

// - Create a `word` variable containing the value` "banana" `
// - Create a variable `letters` containing an array of letters from` word`
// - Show `letters` in the console

// // The result must be an array where each element is a letter:
// ['b', 'a', 'n', 'a', 'n', 'a']

var word = "banana";
console.log(word);
var letter = word.split("");
console.log(letter);

// 08 - Template

// - Create a variable `age` containing the value` "xx" `by replacing" xx "by your age
// - Create a `template` variable containing the phrase" I'm ___ years old "using a literal template and the` age` variable
// - Show `template` in the console

var age = 20;
var template = `I'am ` + age + ` years old`;
console.log(template);