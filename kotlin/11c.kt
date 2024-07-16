fun main(){
    val userAns: Int = readln().toIntOrNull() ?: 0;
    val userAns2: Int = readln().toIntOrNull() ?: 0;
    if(userAns > userAns2){
        println("${userAns} is greater than ${userAns2}");
    } else if(userAns < userAns2){
        println("${userAns} is less than ${userAns2}");
    } else {
        println("${userAns} is equal to ${userAns2}");
    }
}