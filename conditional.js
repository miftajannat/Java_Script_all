// if (){
//     // code
// }
// else if (){
//     // code
// }
// condition hoi eita na hoi oita 


var a = 10;
if (a < 5) {
    console.log("a is smaller than 5");
}
else if (a > 8) {
    console.log("a is greater than 8");
}

var a = 10;
if (a == 10) {
    console.log("a is smaller than 5");
}
else if (a > 8) {
    console.log("a is greater than 8");
}
// equal ==
// not equal !=


var jobPaiso = true;
var savingAmount = 5000;
if (jobPaiso == true && savingAmount > 200000) {
    console.log("Aso tomar patri khuji");
}
else if (jobPaiso == true) {
    console.log("Aso tomar patri na khuji");
}
// or = ||
// and = &&

var jobPaiso = true;
var savingAmount = 5000;
if (jobPaiso == true || savingAmount > 200000) {
    console.log("Aso tomar patri khuji");
}
else if (jobPaiso == true) {
    console.log("Aso tomar patri na khuji");
}

var jobPaiso = true;
var savingAmount = 5000;
if (jobPaiso == true && savingAmount > 200000) {
    console.log("Aso tomar patri khuji");
}
else if (jobPaiso == true) {
    console.log("Aso tomar patri koi din por khuji");
}
else {
    console.log("Tor kopale biya nai");
}