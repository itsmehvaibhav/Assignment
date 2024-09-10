const prompt = require("prompt-sync")();
var input1 = parseInt(prompt("Enter first number:"));
var input2 = parseInt(prompt("Enter second number:"));
if (input1 == input2) {
    console.log(input1 + " is equal to " + input2);
} else if (input1 > input2) {
    console.log(input1 + " is larger than " + input2);
} else {
    console.log(input1 + " is lesser than " + input2);
}/mmmmmmmmmmmmmmmmmm