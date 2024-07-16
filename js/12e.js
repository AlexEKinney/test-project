//12e 10/10 program 
// imports
const prompt = require("prompt-sync")({ sigint: true });
// get the input
const num = prompt();
// loop
for (let i = 0; i < 13 ; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
}