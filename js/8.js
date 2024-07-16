// 8th one i think
const prompt = require("prompt-sync")({ sigint: true });

let pocketMoneyPerMonth = prompt();
spentMoney = prompt();
// work out how much is left and output
let leftMoney = parseFloat(pocketMoneyPerMonth) - parseFloat(spentMoney);
console.log(`You have spent ${spentMoney} and have ${leftMoney} left`);
// ask the user again as that it what it asks for me to do for some reason 
pocketMoneyPerMonth = prompt();
// work out max spend per day
let maxSpendPerDay = parseFloat(pocketMoneyPerMonth)/30;
console.log(`You can spend ${maxSpendPerDay} per day`);