//11d
const prompt = require("prompt-sync")({ sigint: true });
// define vars
let rating = "null";
let userAge = prompt();
// if statements
if (userAge >= 18){
    rating = "Anything";
} else if (userAge >= 15 && userAge < 18){
    rating = "up to a 15";
} else if (userAge >= 12 && userAge < 15){
    rating = "up to a 12";
} else {
    rating = "that your mam will be called to pick you up"
}
// print
console.log(`You can watch ${rating}`);