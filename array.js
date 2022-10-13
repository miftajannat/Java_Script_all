//  array first value will start from 0
var friendsAge = [11, 13, 17, 19];
console.log(friendsAge);
// 11, 13, 17, 19

var friendsAge = [11, 13, 17, 19];
console.log(friendsAge[0]);
// 11


var friendsAge = [11, 13, 17, 19];
var simiAge = friendsAge[2];
console.log(simiAge);
// 17

var friendsAge = [11, 13, 17, 19];
var simiAge = friendsAge[2];
friendsAge[1] = 21;
console.log(friendsAge);
// 11, 21, 17, 19


// how to know position on array
var friendsAge = [11, 13, 17, 19];
var position = friendsAge.indexOf(17);
console.log(position);
// 2

var friendsAge = [11, 13, 17, 19];
var position = friendsAge.indexOf(170);
console.log(position);
// -1 jodi value na thake tahole -1 dekhabe

// add Element in array
var friendsAge = [11, 13, 17, 19];
friendsAge.push(15);
friendsAge.push(20);
console.log(friendsAge);
// 11, 13, 17, 19, 15

// how to know array length
var friendsAge = [11, 13, 17, 19];
console.log(friendsAge.length);
// 4

// pop or out element from array.... pop by default out the last element
var friendsAge = [11, 13, 17, 19];
friendsAge.pop();
console.log(friendsAge);


// add element in first position
var friendsAge = [11, 13, 17, 19];
friendsAge.unshift(15);
console.log(friendsAge);
// 15, 11, 13, 17, 19

// out element from first position
var friendsAge = [11, 13, 17, 19];
friendsAge.shift();
console.log(friendsAge);
// 13, 17, 19


// slice method e ekta part slice it means kete newa ekta part.....Element 2 theke suru kore 5 porjontw paba baki sob out hoie jabe
var tealine = ['kalam', 'balam', 'salam', 'jalam', 'palam', 'talam', 'dalam'];
var part = tealine.slice(2, 5);
console.log(part);
// salam, jalam, palam


// splice e ekta part kete fela jabe r add o kora jabe main array o change kore felbe
// 'salam', 'jalam', 'palam', 'talam', 'dalam'
var tealine = ['kalam', 'balam', 'salam', 'jalam', 'palam', 'talam', 'dalam'];
var part = tealine.splice(2, 5);
console.log(part);