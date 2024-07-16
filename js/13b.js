//13b
// import things
const prompt = require("prompt-sync")({ sigint: true });
// get the input
var choice = prompt("INPUT T OR F > ");
while (choice.toLocaleLowerCase() != "t"){
    var choice = prompt("INPUT T OR F > ");
}
console.log("Finally!");