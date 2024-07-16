// not all can be done with what i know
// this is as far as i can go
// i can't do the rest
#include <stdio.h> // for printf() and scanf()
#include <ctype.h> // for tolower() and toupper()

int main() {
    char example[] = "this IS a stRing";
    
    for (int i = 0; example[i] != '\0'; i++) {
        example[i] = tolower(example[i]);
    }
    printf("%s\n", example);
    
    for (int i = 0; example[i] != '\0'; i++) {
        example[i] = toupper(example[i]);
    }
    printf("%s\n", example);
    
    return 0;
}
// im not the best at c
