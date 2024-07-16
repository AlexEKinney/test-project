//c10 username gen 
const prompt = require("prompt-sync")({ sigint: true });
let dob = prompt("BIRTH DATE IN YY FORMAT NO OTHER CHARACTERS: ");
let name = prompt("Ask the user for their last name.");
// outpout final
console.log(`Your username is ${name}${dob}`);