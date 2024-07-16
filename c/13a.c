#include <stdio.h>
int main() {
    int y = 10;
    printf("%d\n",y);
    while (y <= 100){
        y=y*2;
        printf("%d\n",y);
    }
    printf("Final value for y is %d\n",y);
}