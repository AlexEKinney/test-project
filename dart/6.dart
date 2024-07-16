//6
void main(){
  String word = "Hello World";
  int counter = 0;
  // 1st char
  print(word[0]);
  // 1st 3 chars
  print(word.substring(0,3));
  // last 3 chars (negative numbers do not work in substrings in dart so this must be done)
  print(word.substring(word.length - 3));
  // all but last 3
  print(word.substring(0,word.length-3));
for (var i = 0; i < word.length; i++) {
  if(word.substring(i) == "o"){
    counter = counter + 1;
  } else {
    print(word.substring(i));
  }
}
print(counter);
}