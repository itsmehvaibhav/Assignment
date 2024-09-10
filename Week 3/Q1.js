const prompt = require("prompt-sync")();
let t = parseInt(prompt("Enter the first input"));

let t2 = parseInt(prompt("Enter the second input"));

function y(t, t2) {
    return t == 50 || t2 == 50 || t + t2 == 50;
}
console.log(y(t, t2));
//fffffffffffffffff
vvvvvvvvvvvvvvvvvvvvv