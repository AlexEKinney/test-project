//11c
import 'dart:io';

void main(){
  String num1 = stdin.readLineSync()!;
  String num2 = stdin.readLineSync()!;
  // double for more values 
  if (double.parse(num1) > double.parse(num2)) {
      print("$num1 is bigger than $num2");
  } else if (double.parse(num1) != double.parse(num2)) {
    print("$num1 is smaller than $num2");
  } else {
    print("$num1 is equal to $num2");
  }
}