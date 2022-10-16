var student = { id: 1, name: "John", age: 25 };
var student2 = { id: 2, name: "Mary", age: 23 };
console.log(student);
console.log(student2);

// specific kichu ekta or ekta perameter output chaile 
var student = { id: 1, name: "John", age: 25 };
var student2 = { id: 2, name: "Mary", age: 23 };

// console.log(student.name);

// var name1 = student.name;
// console.log(name1);

var name1 = student["name"];
console.log(name1);

var name1 = "name";
var name2 = student[name1];
console.log(name2);

// update value or property
var student = { id: 1, name: "John", age: 25 };
var student2 = { id: 2, name: "Mary", age: 23 };
student2.name = "Sumy";
console.log(student2);

// add new property
var student = { id: 1, name: "John", age: 25 };
var student2 = { id: 2, name: "Mary", age: 23 };
student2.phone = 01717171717;
console.log(student2);