    const tasks = document.querySelectorAll('.task');
    const output = document.querySelector('.output');

    for (const task of tasks) {
      task.addEventListener('click', () => {
        const taskId = task.id.replace('task', '');
        const taskFunction = window['task' + taskId];

        if (taskFunction) {
          const result = taskFunction();
          output.textContent = result;
        }
      });
    }

    function task1() {
        let word1 = "The";
let word2 = "future";
let word3 = "belongs";
let word4 = "to";
let word5 = "those";
let word6 = "who";
let word7 = "prepare";
let word8 = "for";
let word9 = "it";
let word_10 = "today";
      return `CODE:
// 1
/// why is there an intruder alarm going off at 4pm please send help

let word1 = "The";
let word2 = "future";
let word3 = "belongs";
let word4 = "to";
let word5 = "those";
let word6 = "who";
let word7 = "prepare";
let word8 = "for";
let word9 = "it";
let word_10 = "today";

// print out all 10

console.info(word1,word2,word3,word4,word5,word6,word7,word8,word9,word_10)

OUTPUT: ${word1+word2+word3+word4+word5+word6+word7+word8+word9+word_10}      `;
    }

    function task2() {
        const onest = prompt('1st int:')
        const twond = prompt('2nd int:')
        const threerd = prompt('3rd int:')
        let total = parseInt(onest)+parseInt(twond)+parseInt(threerd)

      return `CODE:
      //2
const prompt = require("prompt-sync")({ sigint: true }); // this is requried in node

var onest = prompt()
var twond = prompt();
var threerd = prompt();

let total = parseInt(onest)+parseInt(twond)+parseInt(threerd)

${"console.log(`The total for your numbers is ${total}`)"}

output: ${total}
      `;

    }

    function task3() {
        const num1 = prompt('1st float:')
        const num2 = prompt('2nd float:')
        const total = parseFloat(num1)*parseFloat(num2)

      return `CODE: //3
const prompt = require("prompt-sync")({ sigint: true }); // this is requried in node

let num1 = prompt();
let num2 = prompt();

let total = parseFloat(num1)*parseFloat(num2);

${"console.info(`Your first number is ${num1} and your second number is ${num2} and your total is ${total}`)"}
OUTPUT: Your first number is ${num1} and your second number is ${num2} and your total is  ${total}`;
    }

    function task4() {
        var example;
example = "this IS a stRing";
console.log(example.toLowerCase());
console.log(example.toUpperCase());
console.log(titleCase(example));
console.log(swapCase(example));
console.log(capitalize(example));

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' '); 
  }
function swapCase (str){
    var newstr = "";
    for(var i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newstr += str[i].toUpperCase();
        }else {
            newstr += str[i].toLowerCase();
        }
    }
    console.log(newstr);
    return newstr;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
      // This task requires an input value
      return `CODE 
      var example;
example = "this IS a stRing";
console.log(example.toLowerCase());
console.log(example.toUpperCase());
console.log(titleCase(example));
console.log(swapCase(example));
console.log(capitalize(example));

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' '); 
  }
function swapCase (str){
    var newstr = "";
    for(var i = 0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            newstr += str[i].toUpperCase();
        }else {
            newstr += str[i].toLowerCase();
        }
    }
    console.log(newstr);
    return newstr;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
OUTPUT: ${example.toLowerCase()}
${example.toUpperCase()}
${titleCase(example)}
${swapCase(example)}
${capitalize(example)}`;
    }

    function task5() {
        //c5
// define the words
let word1 = "this";
let word2 = "is";
// output chars per word

      // This task involves user confirmation
        return `CODE:
        //c5
// define the words
let word1 = "this";
let word2 = "is";
// output chars per word
${"console.info(`The first word is ${word1.length} characters long and the second word is ${word2.length} characters long`)"}
OUTPUT: The first word is ${word1.length} characters long and the second word is ${word2.length} characters long`
    }
    function task6() {
        //c6
let word = "Hello World";
let counter = 0;
// output first char
let one = word[0];
// output first 3 chars
let two = word.slice(0,3)
// output last 3 chars 
let thjreee = word.slice(-3)
// output all but last 3
let four = word.slice(0,-3)

for(let step = 0; step < word.length; step++){
    if (word[step] === "o"){
        counter++;
    }
}
let final = `The word ${word} contains ${counter} o's`;
    return `CODE:
    //c6
let word = "Hello World";
let counter = 0;
// output first char
console.info(word[0]);
// output first 3 chars
console.info(word.slice(0,3));
// output last 3 chars 
console.info(word.slice(-3));
// output all but last 3
console.info(word.slice(0,-3));

for(let step = 0; step < word.length; step++){
    if (word[step] === "o"){
        counter++;
    }
}
${"console.info(`The word ${word} contains ${counter} o's`)"};
OUTPUT: ${one}
${two}
${thjreee}
${four}
${final}
    `
    }
    function task7() {
        //c7
// 1st sting
const word1_a = "Hello";
const word1_b = "There";
// 2nd string
const word2_a = "Chewie";
const word2_b = "We\'re Home";
// 3rd string
const word3_a = "Do, Or Do Not";
const word3_b = "There is no try";

// add all togher
const word1 = word1_a + word1_b;
const word2 = word2_a + word2_b;
const word3 = word3_a + word3_b;

// log all 3
        return `CODE:
        //c7
// 1st sting
const word1_a = "Hello";
const word1_b = "There";
// 2nd string
const word2_a = "Chewie";
const word2_b = "We\'re Home";
// 3rd string
const word3_a = "Do, Or Do Not";
const word3_b = "There is no try";

// add all togher
const word1 = word1_a + word1_b;
const word2 = word2_a + word2_b;
const word3 = word3_a + word3_b;

// log all 3
console.info(word1+word2+word3);

OUTPUT: ${word1+word2+word3}
        `
    }
    function task8() {
        // 8th one i think

let pocketMoneyPerMonth = prompt("How much pocket money do you get per month?");
spentMoney = prompt("How much have you spent?");
// work out how much is left and output
let leftMoney = parseFloat(pocketMoneyPerMonth) - parseFloat(spentMoney);
let first = `You have spent ${spentMoney} and have ${leftMoney} left`
// ask the user again as that it what it asks for me to do for some reason 
pocketMoneyPerMonth = prompt("How much pocket money do you get per month?");
// work out max spend per day
let maxSpendPerDay = parseFloat(pocketMoneyPerMonth)/30;
let second = `You can spend ${maxSpendPerDay} per day`;
        return `CODE:
        // 8th one i think
const prompt = require("prompt-sync")({ sigint: true });

let pocketMoneyPerMonth = prompt();
spentMoney = prompt();
// work out how much is left and output
let leftMoney = parseFloat(pocketMoneyPerMonth) - parseFloat(spentMoney);
console.log(\`You have spent \$\{spentMoney\} and have \$\{leftMoney}\ left\`\);
// ask the user again as that it what it asks for me to do for some reason 
pocketMoneyPerMonth = prompt();
// work out max spend per day
let maxSpendPerDay = parseFloat(pocketMoneyPerMonth)/30;
console.log(\`You can spend \$\{maxSpendPerDay\} per day\`);

OUTPUT: ${first}
${second}
        
        `
    }
    function task9() {
        //c9 rectangle one

let length = prompt("What is the length of the rectangle?");
let width = prompt("What is the width of the rectangle?");
let area = parseFloat(length)*parseFloat(width);
let final = `The area of the rectangle is ${area}`
       return `CODE:
       //c9 rectangle one
const prompt = require("prompt-sync")({ sigint: true });
let length = prompt();
let width = prompt();
let area = parseFloat(length)*parseFloat(width);
console.log(\`The area of the rectangle is \$\{area\}\`);

OUTPUT: ${final}
       `
    }
    function task10() {
        //c10 username gen 

let dob = prompt("BIRTH DATE IN YY FORMAT NO OTHER CHARACTERS: ");
let name = prompt("Ask the user for their last name.");
// outpout final
let final = `Your username is ${name}${dob}`;
        return`CODE:
        //c10 username gen 
const prompt = require("prompt-sync")({ sigint: true });
let dob = prompt("BIRTH DATE IN YY FORMAT NO OTHER CHARACTERS: ");
let name = prompt("Ask the user for their last name.");
// outpout final
console.log(\`Your username is \$\{name\}\$\{dob\}\`);
OUTPUT: ${final}
        `
    }
    function task11() {
        //11a

//get the input
let userAns = prompt("What is 24+9?");
if (userAns == 24+9){
    final = "well done this is the correct answer."
} else {
    final = "wrong answer.";
}
       return `CODE:
       //11a
const prompt = require("prompt-sync")({ sigint: true });
//get the input
let userAns = prompt();
if (userAns == 24+9){
    console.log("well done this is the correct answer.")
} else {
    console.error("wrong answer.")
}
OUTPUT: ${final}
       `
    }
    function task12() {
        //11b
let userAns = prompt("Enter a number:");
if (userAns %2 != 0){
    var final = "odd";
} else {
    var final = "even";
}
        return `CODE:
        //11b
const prompt = require("prompt-sync")({ sigint: true });
let userAns = prompt();
if (userAns %2 != 0){
    console.log("odd");
} else {
    console.log("even");
}
OUTPUT: ${final}
        `
    }
    function task13() {
        //11c
//11c


let userAns = prompt("Enter a number:");
let userAns2 = prompt("Enter another number:");

if (userAns>userAns2){
    final = `${userAns} is greater than ${userAns2}`
}
else if (userAns<userAns2){
    final = `${userAns} is less than ${userAns2}`
}
else {
    final = `${userAns} is equal to ${userAns2}`
}

        return `CODE:
        //11c
const prompt = require("prompt-sync")({ sigint: true });

let userAns = prompt();
let userAns2 = prompt();

if (userAns>userAns2){
    console.log(\`\${userAns} is greater than \${userAns2}\`);
}
else if (userAns<userAns2){
    console.log(\`\${userAns} is less than \${userAns2}\`);
}
else {
    console.log(\`\${userAns} is equal to \${userAns2}\`);
}

OUTPUT: ${final}
        `
    }
    function task14() {
        //11d

// define vars
let rating = "null";
let userAge = prompt("Enter your age:");
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
var final = `You can watch ${rating}`;
        return `CODE:
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
console.log(\`You can watch \$\{rating\}\`);
OUTPUT: ${final}`
    }
    function task15() {
        //12a
        var str = "";
for (var i = 0; i < 21; i++) {
    str = str+i*5+"\n";
}
        return `CODE:
        //12a
for (var i = 0; i < 21; i++) {
    console.log(i*5);
}
OUTPUT: ${str}`
    }

    function task16() {
        //12b
// define vars
str = "";
let counter = 100;
for (let step = 0; step < 100; step++){
    str = str + counter + "\n";
    counter--;
}
final = `BLAST OFF!`
        return `CODE:
        //12b
// define vars
let counter = 100;
for (let step = 0; step < 100; step++){
    console.info(counter);
    counter--;
}
console.info("BLAST OFF!")
OUTPUT: ${str}
${final}
        `
    }
    function task17() {
                //12c
// import things
// get the input
let str = "";
const name = prompt("Enter your name:");
for (let i = 0; i < name.length; i++) {
    str = str+name[i]+"\n";
}
        return `CODE: 
        //12c
// import things
const prompt = require("prompt-sync")({ sigint: true });
// get the input
const name = prompt();
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
OUTPUT: ${str}
        `
    }
    function task18() {
        //12d
// imports


// get the input
const name = prompt("Enter your name");
var str = "";
// define vars
const line = "I must complete my homework on time or ___ will be cross";

while (true) {
  for (let i = 0; i < 101; i++) {
    str=str+line+"\n";
  }

  str = str +`Lines by ${name}`+"\n";

  const userAns = prompt("Again? (yes/no) ");

  if (userAns.toLowerCase() !== "yes") {
    break;
  }
}

        return `CODE:
        //12d
// imports
const prompt = require("prompt-sync")({ sigint: true });

// get the input
const name = prompt();

// define vars
const line = "I must complete my homework on time or ___ will be cross";

while (true) {
  for (let i = 0; i < 101; i++) {
    console.log(line);
  }

  console.log(\`Lines by \$\{name}\`);

  const userAns = prompt("Again? (yes/no) ");

  if (userAns.toLowerCase() !== "yes") {
    break;
  }
}
OUTPUT: ${str}
        `
    }
    function task19() {
        //12e 10/10 program 
// imports

// get the input
const num = prompt("Enter a number:");
var str = "";
// loop
for (let i = 0; i < 13 ; i++) {
    str=str+`${num} x ${i} = ${num*i}`+"\n";
}
        return `CODE:
        //12e 10/10 program 
// imports
const prompt = require("prompt-sync")({ sigint: true });
// get the input
const num = prompt();
// loop
for (let i = 0; i < 13 ; i++) {
    console.log(\`\${num} x \${i} = \${num*i}\`);
}
OUTPUT: ${str}
        `

    }

    function task20() {
        // 13a
// define vars
var str = "";
let y=10;
str=str+y+"\n";
while (y <= 100){
    y=y*2;
    str=str+y+"\n";
}
var final =`The final value of y is ${y}`;
        return `CODE:
        // 13a
// define vars
let y=10;
console.info(y);
while (y <= 100){
    y=y*2;
    console.info(y);
}
console.info(\`The final value of y is \${y}\`)
OUTPUT: ${str}
${final}
        `
    }
    function task21() {
        //13b
// import things

// get the input
var choice = prompt("INPUT T OR F > ");
while (choice.toLocaleLowerCase() != "t"){
    var choice = prompt("INPUT T OR F > ");
}
var final = "Finally!";
        return `CODE:
        //13b
// import things
const prompt = require("prompt-sync")({ sigint: true });
// get the input
var choice = prompt("INPUT T OR F > ");
while (choice.toLocaleLowerCase() != "t"){
    var choice = prompt("INPUT T OR F > ");
}
console.log("Finally!");
OUTPUT: ${final}
        `
    }
    function task22() {
        //14
// import things

// get the input
let userChoice = prompt("Enter a number:");
// selection statement here we wo we wo
if (userChoice < 6 || userChoice > 10){
    var final = "Your number is less than 6, or greater than 10"
} else {
    var final = "Your number NOT is less than 6, or greater than 10"
}
        return `CODE:
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
OUTPUT: ${final}
        `
    }
    function task23() {
        //15
// random number generator between 1 and 20
const randomNum = Math.floor(Math.random() * 20) + 1;
// the 
if (randomNum > 10){
    var final = `The random number is ${randomNum} and is greater than 10`
} else
if (randomNum < 10){
   var final = `The random number is ${randomNum} and is less than 10`
}
        return `CODE:
        //15
// random number generator between 1 and 20
const randomNum = Math.floor(Math.random() * 20) + 1;
// the 
if (randomNum > 10){
    console.info(\`The random number is \${randomNum} and is greater than 10\`)
} else
if (randomNum < 10){
    console.info(\`The random number is \${randomNum} and is less than 10\`)
}
OUTPUT: ${final}`
    }
