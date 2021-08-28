/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 013
    program description: Loops
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

// for loop
// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// looping through an array
var array01 = Array(1,2,3,4,5,'k', 6,7,8);
for (let index = 0; index < array01.length; index++) {
    if (typeof array01[index] === "string") break;
    console.log(array01[index]); 
}

// separator
console.log(`---------------------------------------`);

// continue
var array01 = Array(1,2,3,4,5,'k', 6,7,8);
for (let index = 0; index < array01.length; index++) {
    if (typeof array01[index] === "string") continue;
    console.log(array01[index]); 
}

// displaying the ouput in a tabular form
console.table(array01);

// while loop
let i = 0;
while (i < array01.length) {
    console.log(array01[i]);
    i++;
}
// separator
console.log(`---------------------------------------`);

// do while
let j = 0;
do {
    console.log(array01[j]);
    j++;
} while (j < array01.length);

// separator
console.log(`---------------------------------------`);

// for each loop
var array02 = Array(1,2,3,4,5, 6,7,8);
array02.forEach((s) => (console.log(s)));
