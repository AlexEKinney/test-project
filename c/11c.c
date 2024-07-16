#include <stdio.h>
#include <stdlib.h>
int main(){
    int input1;
    int input2;
    // get input
    scanf("%d", &input1);
    scanf("%d", &input2);
    if(input1>input2){
        printf("%d is greater than %d", input1, input2);
    } else if(input1<input2){
        printf("%d is less than %d", input1, input2);
    } else {
        printf("%d is equal to %d", input1, input2);
    } 
}