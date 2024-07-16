fun main(){
    val dob: Int = readln().toIntOrNull() ?: 0;
    val name: String = readln().toString();
    println("username: ${name}${dob}");
}