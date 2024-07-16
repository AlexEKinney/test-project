//12d
// imports
const prompt = require("prompt-sync")({ sigint: true });

// get the input
const name = prompt();

// define vars
const line = "I must complete my homework on time or the teacher will be cross";

while (true) {
  for (let i = 0; i < 101; i++) {
    console.log(line);
  }

  console.log(`Lines by ${name}`);

  const userAns = prompt("Again? (yes/no) ");

  if (userAns.toLowerCase() !== "yes") {
    break;
  }
}
