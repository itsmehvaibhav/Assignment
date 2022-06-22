const prompt = require("prompt-sync")();
let t = prompt("Enter the first input");

function l(t) {
    // Split the string into array
    t = t.split(" ");
    // Return the first sorted item of the Array
    return t.sort((a, b) => b.length - a.length)[0];
}

console.log(l(t));