// imports
#include <stdio.h>
#include <stdlib.h>
int main(){
    // get len input
    int len;
    int width;
    scanf("%d", &len);
    scanf("%d", &width);
    // work out area
    int area = len * width;
    // log the result
    printf("The area is %d", area);
}