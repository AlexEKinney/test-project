##14
userChoice = int(input())
## check if it matches
if userChoice < 6:
    result = "Your number is less than 6, or more than 10"
elif userChoice > 10:
    result = "Your number is less than 6, or more than 10"
else:
    result = "Your number is NOT less than 6, or more than 10"
print(result)