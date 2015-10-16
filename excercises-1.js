///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.



var add = function (num1, num2) {
	return num1 + num2; 
}
console.log(add(2,3)); 


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

var avg = function (num1 , num2, num3) {
	return num1 + num2 + num3 / 3;
}

console.log(avg(43, 342, 2));


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (str) {
	return str.length;
}

console.log(getLength("fddfa"));



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.


function greaterThan (a , b) {
	if(a < b){
		return true;
	} 
	return false;
									
}

console.log(greaterThan(2, 4));


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.


function greet(name) {
	return "Hello, " + name ;
}

console.log(greet(name));



// Write a function called `madlib` yayayayayayayayaayaay
//that takes 4 or more parameters (words). yyyyygygygygygygygyg
//The function should insert the words into a pre-defined sentence. 
//Finally the function should return that sentence.



// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"


function madlib (word1, word2, word3, word4) {
	return word1 + word2 + word3 + word4 + "over the fence" ;
	
}
console.log(madlib("quick ","brown ", "fox ", "jumps "));
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
