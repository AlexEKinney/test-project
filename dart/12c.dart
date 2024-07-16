import 'dart:io';

void main(){
  String name = stdin.readLineSync()!;
  for (int i = 0; i < name.length; i++) {
    print(name[i]);
  }
}