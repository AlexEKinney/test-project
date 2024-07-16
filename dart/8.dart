import 'dart:io';

void main() {
  // 8
  String pocketMoneyPerMonth = stdin.readLineSync()!;
  String spentMoney = stdin.readLineSync()!;
  // work out how much is left
  String leftMoney = "${double.parse(pocketMoneyPerMonth)-double.parse(spentMoney)}"; // double is correct to use in this case 
  print("Spent $spentMoney and have $leftMoney left");
  // need to ask again as this is the task
  pocketMoneyPerMonth = stdin.readLineSync()!; // type has been set before
  // work out max spend per day
  String maxSpend = "${double.parse(pocketMoneyPerMonth)/30}";
  // output
  print("You can spend $maxSpend per day in a 30 day month!");
}