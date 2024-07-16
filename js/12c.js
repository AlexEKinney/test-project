//12c
// import things
const prompt = require("prompt-sync")({ sigint: true });
// get the input
const name = prompt();
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}