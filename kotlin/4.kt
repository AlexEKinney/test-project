fun String.titleCase(delimiter: String = " ") =
    split(delimiter).joinToString(delimiter) { word ->

        val smallCaseWord = word.lowercase()
        smallCaseWord.replaceFirstChar(Char::titlecaseChar)

    }

    fun String.swapcase(): String {
        var resultTemp = ""
        for (char in this) {
            resultTemp += if (char.isLowerCase()) char.uppercase() else char.lowercase()
        }
        return resultTemp
    }
fun main(){
    val example = "this IS a stRing";
    println(example.uppercase());
    println(example.lowercase());
    println(example.titleCase()); // this is using an extension function 
    println(example.swapcase());
    println(example.replaceFirstChar { transform -> transform.uppercase() }); // this is using a lambda function
}
