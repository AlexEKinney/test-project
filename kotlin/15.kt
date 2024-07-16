fun main(){
    val randNum : Int = (Math.random()*20).toInt()+1;
    if(randNum > 10){
        println("The random number is ${randNum} and is greater than 10");
    } else {
        println("The random number is ${randNum} and is less than 10");
    }
}