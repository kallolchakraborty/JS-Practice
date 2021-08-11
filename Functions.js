/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 006
    program description: Functions
    time complexity: O(1)
    space complexity: O(1)
    date: 05/08/2021
----------------------------------------------------------*/

// function with printing option
function myFunction(name){
    console.log(`Hello, I am ${name} !`);
}

myFunction("Kallol Chakraborty"); //Calling the function
myFunction; //Referring the function

// function with return
function namstey(){
    return "Hello from India.";
}

console.log(namstey()); //Another way of calling function with return parameters

// putting a function in a variable
var fmVariable = function welcome(){
    return "Welcome !";
}

console.log(fmVariable());

// arrow functions
var arrowVariable = (fullName) => {
    return `Welcome ${fullName} !`;
}
console.log(arrowVariable("Kallol"));

//  function declaration are scanned & made available.
tipper("46")
function tipper(a){
    var bill = parseInt(a); //converting to int
    console.log(bill + 10);
}

//  variables declaration are scanned and made undefined.

// it will show the value as undefined
console.log(fname);
var fname = "kallol chakraborty";

//  throws an error as not a function as it is treated as a variable
bigTipper("40")
var bigTipper = function (a){
    var bill = parseInt(a); //converting to int
    console.log(bill + 10);
}



