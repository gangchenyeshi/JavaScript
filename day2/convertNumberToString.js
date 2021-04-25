// Convert Number to String
// Sometimes you have to trznsform a number into a string.
// we use the .toString() method

var num = 512;
console.log(num); 
console.log(num.length); //undefined length

num = num.toString();
console.log(num); 
console.log(num.length); // length is 3 because it is converted to String by .toString() method


// Number of telephone
var number = 1234567890;
var stringifiedNumber = number.toString();
if(stringifiedNumber.length === 10 && stringifiedNumber.charAt(0)) {
    console.log("Its Correct Telephone Number");
}else {
    console.log("Its In-Correct Telephone Number");
}
