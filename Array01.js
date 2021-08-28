/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 008
    program description: Array
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

// Old Style
var array1 = ['1','2','3','4','5'];

// New Style
var array2 = new Array('6','7','8','9','10');
console.log(array2);

console.log(array1);
console.log(`First Element: ${array1[0]}`); // first element
// re-assigning/replacing
array1[0]='11';
console.log(`First Element: ${array1[0]}`); // first element

// not a good way to declare as it contains multiple data types
var array3 = new Array('Kallol', 'chakraborty', 32, true);
console.log(array3);

array3.pop(); // popping the last element
console.log(array3);

array3.unshift('New Value'); // adds an element to first of the array
console.log(array3);

array3.shift();
console.log(array3); // removes the first element

// searching the index of the value provided that exists
console.log(`Location: ${array3.indexOf('Kallol')}`); 

// searching the index of the value provided that does not exist
console.log(`Location: ${array3.indexOf('New Value')}`); 

// converting a string to array
console.log(Array.from('kallol chakraborty'));