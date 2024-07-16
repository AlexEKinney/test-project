fun main(){
    val userAns: Int = readln().toIntOrNull() ?: 0;
    if(userAns%2 == 0){
        println("even");
    } else {
        println("odd");
    }
}