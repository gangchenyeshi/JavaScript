// ## Methods

// Strings have built-in features (** methods **) for modifying / reading their content.

// Length

// Sometimes you will need to know how many characters a string contains. For example, for a password, we will check if it is long enough. For that you will use the **. Length ** property. Here is an example :


var test = "example string";
console.log (test.length) // will return 14


// Remember the point between the variable and the property: test.length and not testlength or test length



//Replace

// You will often need to change the contents of a string. Here is an example that uses the **. Replace (a, b) ** method:

var test = "Coding is hard";
test = test.replace ("hard", "fun");

console.log (test); // will return "Coding is fun"


// To modify a string, we must change its ** value **: we use the equal sign (test = another version of test). If we do not reassign the value, we temporarily modify the content but we do not store it in the variable!



// ### CharAt

// If you want to access the character located at a specific place in a string, you will use the **. CharAt (a) ** method:

var test = "Hey there!";
var first = test.charAt (0);

console.log (first); // will return "H"
console.log (test.charAt (2)); // will return "y"


// ### CharCodeAt and FromCharCode

// If you don't know the ASCII table, go to [on this page] (http://www.asciitable.com/) to find out! It is a list associating characters with a code.

// The **. CharCodeAt (a) ** method will bring you back the ASCII code that corresponds to the character located at this point in the string. The **. FromCharCode (a) ** method does the opposite, and returns a character from the given ASCII code:


var test = "This is a string";

test.charCodeAt (0); // gives 84


// ### ToUpperCase and ToLowerCase

// If you need to make text uppercase, use **. ToUpperCase () ** and vice versa, use **. ToLowerCase () ** to make it lowercase:


var test = "I'm normal"

test.toUpperCase (); // gives "I'M NORMAL"
test.charAt (0) .toLowerCase (); // gives "i"


// ### Split

// With **. Split (a) ** you can transform a string into an array (** array **) which will allow you to use the methods specific to the arrays above. You can choose a precise parameter to divide the string by letter, or by words:


var test = "Lunch time";

var letters = test.split (""); // will give ["L", "u", "n", "c", "h", "", "t", "i", "m", "e"]
var words = test.split (" "); // will give ["Lunch", "time"]


// ### Search

// If the search is successful, **. Search (a) ** will return the index of the character just before the first match that matches. If it returns `-1`, then what you are looking for is not in the string:
var test = "This is a text";

test.search ("text"); // will give 10
test.search ("Z"); // will give -1


// ### Substring

// The **. Substring (a, b) ** method will return a "chunk" that starts at index a and ends just before index b:

var test = "Long string";

var sub = test.substring (2, 4); // will give "ng s"
var end = test.substring (2); // will give "ng string"
