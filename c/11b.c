#include <stdio.h>
#include <stdlib.h>
int main(){
    int input;
    scanf("%d", &input);
    if (input%2 != 0){
        printf("odd");
    } else {
        printf("even");
    }
}