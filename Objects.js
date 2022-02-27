/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 011
    program description: Objects
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

// creating a new object
var newObject01 = {
    // key: value
    firstName: 'Kallol',
    lastName: 'chakraborty',
    role: 'developer',
};

// accessing the objects
console.log(newObject01.firstName);
// alternatively
console.log(newObject01['lastName']);

// manipulation
newObject01['role'] = 'reviewer'
console.log(newObject01['role']);

// printing all the elements
console.log(newObject01);

// printing in table
console.table(newObject01);

