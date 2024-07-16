#include <stdio.h>
int main(){
    int counter = 100;
    int i;
    for (i = 0; i < 100; i++) {
        printf("%d\n", counter);
        counter--;
    }
    printf("Blast off!\n");
}