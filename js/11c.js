//11c
const prompt = require("prompt-sync")({ sigint: true });

let userAns = prompt();
let userAns2 = prompt();

if (userAns>userAns2){
    console.log(`${userAns} is greater than ${userAns2}`);
}
else if (userAns<userAns2){
    console.log(`${userAns} is less than ${userAns2}`);
}
else {
    console.log(`${userAns} is equal to ${userAns2}`);
}
