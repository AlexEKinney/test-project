#include <stdio.h>
#include <stdlib.h>
int main(){
    int userAns;
    printf("What is 24+9?\n");
    scanf("%d", &userAns);
    if (userAns == 24+9){ // just incase the answer of 24+9 changes in the future 
        printf("\nwell done this is the correct answer.");
    } else {
        printf("\nwrong answer.");
    }
}