import 'dart:io';

void main(){
  String num = stdin.readLineSync()!;
  int numInt = int.parse(num);
  for (int i = 0; i < 13; i++) {
    print("$num * $i = ${numInt * i}");
  }
}