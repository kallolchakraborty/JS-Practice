/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 003
    program description: Operators
    time complexity: O(1)
    space complexity: O(1)
    date: 04/08/2021
----------------------------------------------------------*/

var number1 = 6;
var number2 = 7;

console.log("Sum:", number1 + number2);
console.log("Product:", number1 * number2);

// boolean output
console.log(number1 > number2);
console.log("Data Type:", typeof(number1 > number2))

// discount: ((listingPrice - Selling)/listingPrice) * 100
console.log("Discount Pecentage:", ((number2 - number1)/number2) * 100 );

// rounding up
console.log("Rounded Discount Pecentage:", Math.round(((number2 - number1)/number2) * 100));


