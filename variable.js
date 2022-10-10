var number1 = 25;
var number2 = 15.5;
console.log(number1 + number2);

// if you add one string and one number it show in one line.. the answer is 2515.5
var number1 = "25";
var number2 = 15.5;
console.log(number1 + number2);


// if you want to convert a string to a number you can use the parseInt() function.
var number1 = "25";
var number2 = 15.5;
number1 = parseInt(number1);
// number1 = +number1;
console.log(number1 + number2);

// it show 2 digit after the point
var number1 = 178.09090909;
var number2 = 25.000009;
var total = number1 + number2;
console.log(total.toFixed(2));


// Addition
var number1 = 25;
var number2 = 35;
var total = number1 + number2;
console.log(total);

// Subtraction
var number1 = 55;
var number2 = 35;
var total = number1 - number2;
console.log(total);

// Multiplication
var number1 = 55;
var number2 = 35;
var total = number1 * number2;
console.log(total);

// Division
var number1 = 55;
var number2 = 5;
var total = number1 / number2;
console.log(total);

// Modulus or vagshesh or remainder
var number1 = 55;
var number2 = 6;
var total = number1 % number2;
console.log(total);


// Increment
var number1 = 55;
number1++;
console.log(number1);

var number1 = 55;
number1 = number1 + 1;
console.log(number1);

// Decrement
var number1 = 55;
number1--;
console.log(number1);

// add two string
var firstName = "Rahim";
var lastName = "Uddin";
var fullName = firstName + " " + lastName;
console.log(fullName);
// the answer is Rahim Uddin


var number = -25;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);

var number = 25.5;
var absoluteNumber = Math.round(number);
console.log(absoluteNumber);


var number = 28.5;
var result = Math.ceil(number);
console.log(result);

