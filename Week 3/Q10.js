const prompt = require("prompt-sync")();
let t = parseInt(prompt("Enter the number you want to print"));
let str = "";
for (let i = 1; i <= t; i++) {
    for (let u = 0; u < i; u++) {
        str += "*"; // print
    }
    str += "\n";
}
console.log(str);