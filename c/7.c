#include <stdio.h>

int main() {
    // 1st string
    char* word1_a = "Hello";
    char* word1_b = "There";
    // 2nd string
    char* word2_a = "Chewie";
    char* word2_b = "We're Home";
    // 3rd string
    char* word3_a = "Do, Or Do Not";
    char* word3_b = "There is no try";

    // add all together
    char word1[100];  // make sure to allocate enough space for the null terminator. 100 is more than enough 
    sprintf(word1, "%s%s", word1_a, word1_b);
    char word2[100];
    sprintf(word2, "%s%s", word2_a, word2_b);
    char word3[100];
    sprintf(word3, "%s%s", word3_a, word3_b);

    // log all 3
    printf("%s%s%s", word1, word2, word3); // %s is for string type. 

    return 0;
}