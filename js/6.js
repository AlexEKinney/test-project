//c6
let word = "Hello Word";
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
console.info(`The word ${word} contains ${counter} o's`);