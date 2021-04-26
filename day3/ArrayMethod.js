//Methods

// As with strings, there are methods to read and manipulate the content of arrays.

// ### IndexOf

// The **. IndexOf (a) ** method will return the index of an element a in the array. If the element does not exist, then it will return -1:

var test = ["first", "second", "third"];

test.indexOf ("first"); // will give 0
test.indexOf ("foo"); // will give -1



// ### Push and Unshift

// These two methods allow you to add an element in an array, at the end or at the beginning:


var cake = ["eggs", "flour"];

cake.push ("milk");
console.log (cake); // will return ["eggs", "flour", "milk"]

cake.unshift ("butter");
console.log (cake); // will return ["butter", "eggs", "flour", "milk"]


// ### Pop and Shift

// These two methods allow you to remove the last or first element of an array:


var list = ["coffee", "soap", "tomatoes", "rice"];

list.pop ();
console.log (list); // will return ["coffee", "soap", "tomatoes"]

list.shift ();
console.log (list); // will return ["soap", "tomatoes"]


// ### Reverse

// The **. Reverse () ** method allows you to reverse the order of the elements in an array:


var test = ["one", "two", "three"];

test.reverse (); // will give ["three", "two", "one"]


// ### Fate

// The **. Sort (x) ** method sorts the elements in an array according to the specified ** x ** sort function (optional). If no sort function is specified, the elements will all be converted into strings to be ordered in alphabetical order:


var test = [5, 1, 4, 8, 2, 10];

test.sort ((a, b) => a - b); // will give [1, 2, 4, 5, 8, 10]

test.sort ((a, b) => b - a); // will give [10, 8, 5, 4, 2, 1]

test.sort (); // will give [1, 10, 2, 4, 5, 8] because 10 is just after 1 in alphabetical order


// ### Slice

// The **. Slice (a, b) ** method is a cousin of **. Substring () **! It allows you to extract some of the elements of an array, starting from the ** a ** element and stopping just before the ** b ** element:


var test = [1, 2, 3, 4, 5, 6];

test.slice (2, 5); // will give [3, 4, 5]
test.slice (3); // will give [4, 5, 6]


// ### Join

// The **. Join (a) ** method is used to join the elements of an array in a string, adding a step something between each:


var test = ["Hello", "there", "!"];

test.join (""); // will give "Hellothere!"
test.join (" "); // will give "Hello there!"

