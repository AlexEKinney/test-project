//c9 rectangle one
const prompt = require("prompt-sync")({ sigint: true });
let length = prompt();
let width = prompt();
let area = parseFloat(length)*parseFloat(width);
console.log(`The area of the rectangle is ${area}`);