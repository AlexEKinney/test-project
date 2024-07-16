#include <stdio.h>

int main() {
  int oneNum;
  int twoNum;
  int threeNum;

  scanf("%d", &oneNum);
  scanf("%d", &twoNum);
  scanf("%d", &threeNum);
  // add all together
  int sum = oneNum + twoNum + threeNum;
  printf("Your total number is: %d", sum);

  return 0;
}
