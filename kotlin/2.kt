fun main() {
   val onest = readLine()?.toIntOrNull() ?: return // if the input is null, return
   val twost = readLine()?.toIntOrNull() ?: return
    val threest = readLine()?.toIntOrNull() ?: return

    val total = onest + twost + threest;
    println(total);
}

