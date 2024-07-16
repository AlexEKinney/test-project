#include <stdio.h>
#include <stdlib.h>
int main() {
    char dob[100];
    char name[100];
    scanf("%s", dob);
    scanf("%s", name);
    //output
    printf("Your username is %s%s", name, dob);
}