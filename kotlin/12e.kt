fun main(){
    val num : Int = readln().toIntOrNull() ?: 0;
    for (i in 1..12){
        println("${num} x ${i} = ${num*i}");
    }
}