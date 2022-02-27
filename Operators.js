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
console.log("Data Type:", typeof (number1 > number2))

// discount: ((listingPrice - Selling)/listingPrice) * 100
console.log("Discount Pecentage:", ((number2 - number1) / number2) * 100);

// rounding up
console.log("Rounded Discount Pecentage:", Math.round(((number2 - number1) / number2) * 100));

// ternery operator
var authenticated = false;
authenticated ? console.log("LogOut") : console.log("LogIn");

//exponential
let x = 3;
let y = 3;

console.log(x ** y);

//post-increment : first assignement then increment, displays 3 but value will be 4
console.log(x++);
console.log(x);
//pre-increment : first increment then assignment, displays 5 as the 1 is added to x(4)
console.log(++x);

//same in case of decrement

//strict equality: (type + value) check
console.log(1 === 1);

//lose equality: No type check
console.log('1' == 1);

//ternery operator -> condition ? True : False;
// if the customer has more than 100 points then the customer is a Gold customer else Silver
let points = 110;
let type = points > 100 ? 'Gold' : 'Silver';
console.log(`The customer type is : ${type}`);

//Logical operators
//Logical AND(&&): true if all the operands are true
console.log('Logical And output :', false && true)

//Logical OR(||) : true is one of the operands is true
console.log('Logical OR output :', true || false);

//Logical Not(!)
points = 90;
type = points > !100 ? 'Silver' : 'Gold';
console.log(`The customer type is : ${type}`);