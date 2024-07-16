#include <stdio.h>
#include <string.h>

int main() {
    // define the words
    char word1[] = "this";
    char word2[] = "is";
    
    // output chars per word
    printf("The first word is %zu characters long and the second word is %zu characters long\n", strlen(word1), strlen(word2)); //%zu is for unsigned int
    
    return 0;
}