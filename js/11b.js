//11b
const prompt = require("prompt-sync")({ sigint: true });
let userAns = prompt();
if (userAns %2 != 0){
    console.log("odd");
} else {
    console.log("even");
}