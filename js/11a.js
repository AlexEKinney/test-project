//11a
const prompt = require("prompt-sync")({ sigint: true });
//get the input
let userAns = prompt();
if (userAns == 24+9){
    console.log("well done this is the correct answer.")
} else {
    console.error("wrong answer.")
}