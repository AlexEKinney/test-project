#include <stdio.h>
#include <string.h>

int main() {
    char word[] = "Hello Word";
    int counter = 0;
    // output first char
    printf("%c\n", word[0]); // %c is for char
    // output first 3 chars
    char firstThree[4]; // 4 because we need space for the null terminator (\0) im glad python doesnt have this
    strncpy(firstThree, word, 3); // strncpy is for copying strings
    firstThree[3] = '\0'; // null terminator
    printf("%s\n", firstThree); // %s is for string
    // output last 3 chars
    char lastThree[4]; // same as above
    strncpy(lastThree, word + strlen(word) - 3, 3);  // word + strlen(word) - 3 is the same as word[8] (word[11] - 3)
    lastThree[3] = '\0'; // null terminator
    printf("%s\n", lastThree); // %s is for string
    // output all but last 3
    char allButLastThree[strlen(word) - 2]; // same as above
    strncpy(allButLastThree, word, strlen(word) - 3); // same as above
    allButLastThree[strlen(word) - 3] = '\0'; // same as above
    printf("%s\n", allButLastThree); // same as above
    for (int step = 0; step < strlen(word); step++) {
        if (word[step] == 'o') {  
            counter++;
        }
    }
    printf("The word %s contains %d o's\n", word, counter);
    
    return 0;
}
// why is c so hard 