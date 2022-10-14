// num = 20
// if (num > 1000) { }
// else if (num > 180) { }
// else if (num > 100) { }
// else if (num > 60) { }
// else if (num > 50) { }
// else if (num > 40) { }
// else if (num > 500) { }
// else if (num > 3) { }
// else { }


num = 20
switch (num) {
    case 1000:
        console.log("i am 1000");
        break;
    case 100:
        console.log("i am 100");
        break;
    case 60:
    case 50:
        console.log("i am 60 or 50");
        break;
    default:
        console.log("i don't know who you are");
}
// i don't know who you are


num = 100
switch (num) {
    case 1000:
        console.log("i am 1000");
    // break;
    case 100:
        console.log("i am 100");
    // break;
    case 60:
    case 50:
        console.log("i am 60 or 50");
    // break;
    default:
        console.log("i don't know who you are");

}
// i am 100
// i am 60 or 50
// i don't know who you are break na dile sob gula print hobe
