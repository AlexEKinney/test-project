fun main(){
    var choice: String = readln();
    while (choice.lowercase() != "y"){
        choice = readln();
    }
    println("Finally!");
}