fun main() {
    var rating : String
    val userAge : Int = readln().toIntOrNull() ?: 0;
    if (userAge >= 18){
        @Override
        rating = "anything";
    } else if (userAge >= 15){
        @Override
        rating = "15+";
    } else if (userAge >= 12){
        @Override
        rating = "12+";
    }else {
        @Override
        rating = "that your mam will pick you up";
    }
    println("You can see ${rating}");
}