void main(){
  int randomNum = 1 + (new DateTime.now().millisecondsSinceEpoch % 20); // this is the best way to do this.
  if(randomNum > 10){
    print("$randomNum is greater than 10");
  } else {
    print("$randomNum is less than 10");
  }
}