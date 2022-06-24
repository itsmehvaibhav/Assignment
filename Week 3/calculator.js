const prompt = require("prompt-sync")();
let t1 = parseInt(prompt("enter the first number "));
let t2 = parseInt(prompt("enter the second number"));
let t3 = parseInt(prompt("enter the operand 1.+ 2.- 3.* 4./"));

function calculator(t1, t2, t3) {
    switch (t3) {
        case 1:
            t1 + t2;
            return t1 + t2;
            break;
        case 2:
            return t1 - t2;
            break;
        case 3:
            return t1 * t2;
            break;
        case 4:
            return t1 / t2;
            break;
        default:
            return "its is invalid operand";
    }
}
console.log(calculator(t1, t2, t3));