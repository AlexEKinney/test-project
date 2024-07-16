// kotlin needs to be compiled before running. it is compiled to a .class file and then run with java 
// kotlinc 1.kt -include-runtime -d 1.jar && java -jar 1.jar 
fun main() {
    var word1 = "The";
    var word2 = "future";
    var word3 = "belongs";
    var word4 = "to";
    var word5 = "those";
    var word6 = "who";
    var word7 = "prepare";
    var word8 = "for";
    var word9 = "it";
    var word10 = "today";
    // output with spaces between words becuase it looks nicer 
    println(word1 + " " + word2 + " " + word3 + " " + word4 + " " + word5 + " " + word6 + " " + word7 + " " + word8 + " " + word9 + " " + word10); 
}