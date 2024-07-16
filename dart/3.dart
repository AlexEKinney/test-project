import "dart:io";
void main() {
  //3
  String num1 = stdin.readLineSync()!;
  String num2 = stdin.readLineSync()!;
  // add all together
  String total = "${double.parse(num1)*double.parse(num2)}";
  print("number converted to int is ${total}");
}