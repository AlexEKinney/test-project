import 'dart:io';

void main() {
  String userAge = stdin.readLineSync()!;
  if (int.parse(userAge) >= 18) {
    print("You can see anything!");
  } else if (int.parse(userAge) >= 15 && int.parse(userAge) < 18) {
    print("You can see up to a 15");
  } else if (int.parse(userAge) >= 12 && int.parse(userAge)< 15 ){
    print("You can see upto a 12");
  } else {
    print("Your mam will collect you");
  }
}