/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 010
    program description: Array: fill, filter, slice, splice
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

var array01 = Array(1,2,3,4,5,6,7,8);
console.log(array01);

// using fill to fill the array elements with a value
// fill(element,start_position,end_position-1)
console.log(array01.fill('K', 1, 3));

// use of filter to remove element based on a logic
// using callback function or arrow function
const result1 = array01.filter((e) => e != 5 );
console.log(result1);

// alternatively
const result2 = array01.filter((e) => e >= 5 );
console.log(result2);

// using slice: slice(start_position, end_position-1)
// the first position is inclusive & the last one is exclusive
var array02 = Array(1,2,3,4,5,6,7,8);
console.log(array02.slice(2,5));

// using splice: splice(start_position, count, replace_with_values)
var array03 = [1,2,3,4,5,6,7,8];
array03.splice(1,3,'kallol', 'chakraborty');
console.log(array03);


