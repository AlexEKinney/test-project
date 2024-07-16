fun main(){
    var pocketMoneyPerMonth = readLine()?.toIntOrNull() ?: return
    val spentMoney = readLine()?.toIntOrNull() ?: return
    val leftMoney = pocketMoneyPerMonth - spentMoney
    println("You have $leftMoney left from $pocketMoneyPerMonth")
    @Override 
    pocketMoneyPerMonth = readLine()?.toIntOrNull() ?: return
    val maxSpendPerDay: Float = pocketMoneyPerMonth / 30.toFloat()
    println("You can spend $maxSpendPerDay per day in a 30 day month")  
}