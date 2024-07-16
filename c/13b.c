#include <stdio.h>
#include <string.h>

int main() {
  char input[10];

  do {
    printf("YOU MUST INPUT T OR F\n");
    scanf("%s", input);
  } while (strcmp(input, "t") != 0);

  printf("Finally!");

  return 0;
}
