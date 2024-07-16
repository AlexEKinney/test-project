import "dart:io";
void main() {
  //2
  // dart is null safe so the ! is incase it is null
  String onest = stdin.readLineSync()!;
  String twond = stdin.readLineSync()!;
  String threerd = stdin.readLineSync()!;
  // add all together
  String total = "${int.parse(onest)+int.parse(twond)+int.parse(threerd)}";
  print("number converted to int is ${total}");
}