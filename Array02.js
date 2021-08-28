/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 009
    program description: Array
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

// even number
function isEven(element){
    return element%2 === 0;
}

console.log(isEven(2));
console.log(isEven(3));

// using arrow function with same definition
var arrowFunction = (element) => {
    return element%2 === 0; 
}

console.log(arrowFunction(2));
console.log(arrowFunction(3));

// passing reference to an array using every function to check whether
// all the elements are even or not
var result = [1,2,3,4,5,6,7,8,9].every(arrowFunction);
console.log(result);

var result = [2,4,6,8].every(arrowFunction);
console.log(result);

// using callbacks
var result = [2,4,6,8].every((element) => {
    return element%2 === 0;
});
console.log(result);

// shorter form without using return
// if no return is used, replace the {} with ()
var result = [2,4,6,8].every((element) => element%2 === 0 );
console.log(result);


