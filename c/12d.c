#include <stdio.h>
#include <string.h>

int main() {
    // imports
    char name[100];
    printf("Enter your name: ");
    scanf("%s", name);

    // define vars
    char line[] = "I must complete my homework on time or the teacher will be cross";

    while (1) {
        for (int i = 0; i < 101; i++) {
            printf("%s\n", line);
        }

        printf("Lines by %s\n", name);

        char userAns[3];
        printf("Again? (yes/no) ");
        scanf("%s", userAns);

        if (strcmp(userAns, "yes") != 0) {
            break;
        }
    }

    return 0;
}
