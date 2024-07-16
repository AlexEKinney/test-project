import 'dart:io';

void main (){
  String userChoice = stdin.readLineSync()!;
  int userChoiceInt = int.parse(userChoice);
  if (userChoiceInt < 6 || userChoiceInt > 10){
    print("Your number is less than 6, or greater than 10");
  } else {
    print("Your number is between 6 and 10");
  }
}