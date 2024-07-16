#include <stdio.h>
#include <stdlib.h>

int main() {
  int age;
  scanf("%d", &age);

  if (age < 12) {
    printf("You can watch that your mam will pick you up");
  } else if (age < 15) {
    printf("You can watch upto a 12");
  } else if (age < 18) {
    printf("You can watch upto a 15");
  } else {
    printf("You can watch upto an anything");
  }

  return 0;
}
