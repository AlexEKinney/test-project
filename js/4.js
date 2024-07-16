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