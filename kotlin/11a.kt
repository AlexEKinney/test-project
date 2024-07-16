fun main(){
    val userAns: Int = readln().toIntOrNull() ?: 0;
    if(userAns == 24+9){
        println("well done this is the correct answer.");
    } else {
        println("wrong answer.");
    }
}