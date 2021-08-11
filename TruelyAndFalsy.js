/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 005
    program description: Truely & Falsy 
    time complexity: O(1)
    space complexity: O(1)
    date: 05/08/2021
----------------------------------------------------------*/
// all the values defined as below mentioned ones are falsy values
// 1. undefined
// 2. ""
// 3. NaN : Not a Number
// 4. null
// 5. 0

// no output
var variable1 = "";
if (variable1) {
    console.log("Condition is True");
}

// output
// coercion : loose comparison: Only value
var variable2 = "2";
if (2 == variable2) {
    console.log("Condition is True");
}

// no output
// strict comparison: checking type and the value
var variable2 = "2";
if (2 === variable2) {
    console.log("Condition is True");
}

