const prompt = require("prompt-sync")();
let t = parseInt(prompt("Enter the first input"));

let t2 = parseInt(prompt("Enter the second input"));

function y(t, t2) {
    if ((t < 0 && t2 > 0) || (t > 0 && t2 < 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(y(t, t2));