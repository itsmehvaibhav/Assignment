const prompt = require("prompt-sync")();
let t = parseInt(prompt("Enter the first input"));

let t2 = parseInt(prompt("Enter the second input"));
if (t == t2) {
    console.log(3 * (t + t2));
} else {
    console.log(t + t2);
}