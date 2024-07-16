#include <stdio.h>

int main() {
  int n;
  printf("Enter a number: ");
  scanf("%d\n", &n);

  if (n < 6 || n > 10) {
    printf("The number is not between 6 and 10\n");
  } else {
    printf("The number is between 6 and 10\n");
  }

  return 0;
}
