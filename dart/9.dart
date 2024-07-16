//9
import 'dart:io';

void main(){
  // rectangle moment
  String length = stdin.readLineSync()!;
  String width = stdin.readLineSync()!;
  // make area var
  // this must be a string as it is easier to cast 
  String area = "${double.parse(length)*double.parse(width)}";
  // output
  print("Area of rectangle is $area");
}