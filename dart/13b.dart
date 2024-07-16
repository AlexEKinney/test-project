import 'dart:io';

void main(){
  print("YOU MUST INPUT T OR F");
  String userAns = stdin.readLineSync()!;
  while (userAns.toUpperCase() != "T") { // mix it up a bit
    print("YOU MUST INPUT T OR F");
    userAns = stdin.readLineSync()!;
  }
  print("Finally!");
}