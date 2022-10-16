function sayLoveYou() {
    console.log('I love you');
    console.log('I love you 3000');
}
sayLoveYou();

var date = 14;
var place = "Resturent";
sayLoveYou();
var hangoutPlace = "TSC";
sayLoveYou();

function doubleIt(num) {
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
doubleIt(50);
doubleIt(500);

function doubleIt(num) {
    var results = num * 4;
    return results;
}
var first = doubleIt(5);
var second = doubleIt(50);
console.log(first, second);


function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sum = add(15, 17);
console.log(sum);