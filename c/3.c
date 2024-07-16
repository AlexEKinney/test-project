#include <stdio.h>

int main() {
  double oneNum;
  double twoNum;

  scanf("%lf", &oneNum);
  scanf("%lf", &twoNum);
  // times all together
  double sum = oneNum * twoNum;

  printf("Your total number is: %lf", sum); // %lf is for double

  return 0;
}
