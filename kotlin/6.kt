fun main(){
    val word = "Hello World";
    // first char
    println(word[0]); 
    // first 3 chars
    println(word.substring(0,3));
    // last 3 chars
    println(word.substring(word.length-3,word.length));
    // all but last 3
    println(word.substring(0,word.length-3));
    // count how many o's are in the string
    println(word.count { char -> char == 'o' }); // 10x better than python
}