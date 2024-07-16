fun main() {
    val num1: Float? = readLine()?.toFloatOrNull() ?: return // type MUST be set to Float
    val num2: Float? = readLine()?.toFloatOrNull() ?: return
    val total = num1!!*num2!!; // !! confirm that the value is not null
    // print out the result
    println("Your first number is $num1, your second number is $num2, and the totla is $total")
}
