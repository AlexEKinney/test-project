fun main(){
    val userChoice : Int = readln().toIntOrNull() ?: 0;
    if (userChoice < 6 || userChoice > 10){
        println("Your number is less than 6, or greater than 10");
        return;
    } else {
        println("Your number is NOT less than 6, or greater than 10");}
}