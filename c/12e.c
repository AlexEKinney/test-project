#include <stdio.h>
#include <string.h>
int main(){
    // int input
    int input;
    scanf("%d", &input);
    for (int i = 0; i < 13; i++) {
        printf("%d * %d = %d\n", input, i, input * i);
    }
}