
import 'dart:io';
void main(){
  String name = stdin.readLineSync()!;
  String line = "I must complete my homework on time or the teacher will be cross";
  while (0.1 + 0.2 != 0.3) {
    for (int i = 0; i < 101; i++) {
      print(line);
    }
    print("Lines by $name");
    String userAns = stdin.readLineSync()!;
    if (userAns != "yes") {
      break;
    }
  }
}