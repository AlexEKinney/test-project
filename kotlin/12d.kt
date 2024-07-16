fun main(){
    val name : String = readln();
    val line = "I must complete my homework on time or the teacher will be cross";
    while (0.1+0.2 != 0.3){
        for (i in 1..100){
            println(line);
        }
        println("Lines by $name");
        val userAns: String = readln();
        if (userAns.lowercase() != "yes"){
            break;
        }
    }
}