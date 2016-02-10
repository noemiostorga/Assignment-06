// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log(max(34, 65));



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
function maxOfThree(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if (b > a && b > c){
        return b;
    }
    else if (c > a && c > b){
        return c;
    }
    else{
        console.log("same numbers");
    }
}

console.log(maxOfThree(23,33,13));

// ---------------------
// Write a function that takes a character and returns true if it is a vowel, false otherwise.
// ---------------------

function vowel(letter){

var vowels = ["a","e", "i","o", "u"];

    for(var i = 0; i < vowels.length; i++){ //i is just a starting base, vowels.length is what keeps i going throught the array
        if(letter === vowels[i]){
            return true;
        }
    } 

    return false;

}

console.log(vowel("e"));


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

<!--IMPORTANT TO COME BACK -->

function translate(param){

    var vowels = ["a","e","i","o","u"];


    for(var i= 0; i < vowels.length; i ++){

        if(param[i] !== vowels[i]){
            return param.split("").join("o");
        }
    }
}


console.log(translate("this is fun"));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(param){
        return param.split("").reverse().join("");
}

console.log(reverse("jag testar"));
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
/*function findLongestWord(param){ //reduce
    for(var i=0; i <param.length; i++){
        if(a > b){
            return a;
        }

    }
}



console.log(findLongestWord(["car","cd","fds","fd"]))
*/


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------



// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------




/*what did i learn today*/
//if statements are for one tests
//    and else if are for multiple tests if the first one is false
//when writing parameters you don't put brakets or quotes. If these are desired you can but it in the console.log



