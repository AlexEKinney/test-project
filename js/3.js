//3
const prompt = require("prompt-sync")({ sigint: true }); // this is requried in node

let num1 = prompt();
let num2 = prompt();

let total = parseFloat(num1)*parseFloat(num2);

console.info(`Your first number is ${num1} and your second number is ${num2} and your total is ${total}`)