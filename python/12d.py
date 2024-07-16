##12d
line = "I must complete my homework on time or the teacher will be cross"
name = str(input("Enter your name > "))
again = 1
while again == 1:
    for i in range (1,101):
        print(line)
    print("Lines by "+name)
    again = int(input("Again? type 1."))