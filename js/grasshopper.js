//grasshopper
const prompt = require("prompt-sync")({ sigint: true });
global._ = require('underscore')

var gen0pop = [0,0,0]
var surRate = [0,0,0]
var birthRate = 0
var diseaseRate = 0
function setGenZero(){
    console.info("Please enter vars here")
    var popFOrGenZeroJ = prompt("J pop > ")
    var popFOrGenZeroA = prompt("A POP > ")
    var popFOrGenZeroS = prompt("S Pop")
    // 
    var surRateJ = prompt("J SUR > ")
    var surRateA = prompt("ASUS > ")
    var surRateS = prompt("SSUR > ")
    //
    var birthRate = prompt("Birth Rate")
    
}
function mainMenu(){
    console.info(`---Main Menu---
Please pick an option
1. Set gen 0 values
2. View gen 0 values
3. Run 
4. Export
5. Quit 
`)
var choice = ""
var choice = prompt();
while (parseInt(choice) >= 6 || parseInt(choice) <= 0 ){
    console.error("Invalid Choice")
    var choice = prompt();
} 
if (choice == 1){
    setGenZero()
}
}
while (0.1+0.2!=0.3){
    mainMenu()
}