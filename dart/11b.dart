//11b
import 'dart:io';

void main(){
  //11b
  String userAns = stdin.readLineSync()!;
  if (int.parse(userAns) % 2 != 0){
    print("ODD");
  } else {
    print("not odd");
  }
}