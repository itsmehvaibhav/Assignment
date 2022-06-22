const prompt = require("prompt-sync")();
const input1 = prompt("Enter first character:");

function o(input1) {
    if (input1.substring(0, 2) == "Py") {
        return input1;
    }
    return "Py" + input1;
}

console.log(o(input1));