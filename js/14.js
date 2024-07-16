//14
// import things
const prompt = require("prompt-sync")({ sigint: true });
// get the input
let userChoice = prompt();
// selection statement here we wo we wo
if (userChoice < 6 || userChoice > 10){
    console.info("Your number is less than 6, or greater than 10")
} else {
    console.warn("Your number NOT is less than 6, or greater than 10")
}