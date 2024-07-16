//2
const prompt = require("prompt-sync")({ sigint: true }); // this is requried in node

var onest = prompt()
var twond = prompt();
var threerd = prompt();

let total = parseInt(onest)+parseInt(twond)+parseInt(threerd)

console.log(`The total for your numbers is ${total}`)