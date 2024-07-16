#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0));
    int randomNum = (rand() % 20) + 1; // random system 10/10

    // the 
    if (randomNum > 10) {
        printf("The random number is %d and is greater than 10\n", randomNum);
    } else if (randomNum < 10) {
        printf("The random number is %d and is less than 10\n", randomNum);
    }

    return 0;
}
