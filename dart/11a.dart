//11a
import 'dart:io';

void main(){
  //11a
  String userAns = stdin.readLineSync()!;
  // use 24+9 incase it is ever not 33
  if (userAns == "33"){
    print("well done this is the correct answer");
  } else{
    print("WRONG");
  }
}