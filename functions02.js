/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 014
    program description: Functions Practice
    time complexity:
    space complexity:
    date: 28/08/2021
----------------------------------------------------------*/

function greet(fName, lName) {
    console.log('Hello : ' + fName + ' ' + lName);
}

greet('Kallol'); //2nd variable not assigned   
greet('Kallol', 'Chakraborty');

//calculation
function square(number) {
    return number * number;
}

let number = square(5);
console.log(`The Square is ${number}`);

//Alternatively
console.log(square(6));

number = 0;
//Function expression
let f = (number) => (number * number);
console.log(f(3));