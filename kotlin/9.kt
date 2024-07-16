fun main() {
    // lets rectange the area
    val length: Float? = readln().toFloatOrNull();
    val width: Float? = readln().toFloatOrNull();
    if (length != null && width != null) {
        println("Area of rectangle is ${length * width}");
    } else {
        println("Invalid input"); // 10/10 error handling
    }
}