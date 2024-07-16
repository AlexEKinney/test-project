#include <stdio.h>
int main() {
    // get input
    int pocketMoneyPerMonth;
    int spentMoney;
    scanf("%d", &pocketMoneyPerMonth); //& is used to get the address of the variable in memory - lots of fun! c is the best language ever!
    scanf("%d", &spentMoney);
    // work out how much is left
    int moneyLeft = pocketMoneyPerMonth - spentMoney;
    // log the result
    printf("You have %d left", moneyLeft); 
    // work out max spend per day in 30d month
    float maxSpendPerDay = pocketMoneyPerMonth / 30;
    // log the result
    printf("You can spend %f per day", maxSpendPerDay); 
}