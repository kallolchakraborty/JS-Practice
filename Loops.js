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
console.log(`for ---------------------------------------`);

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
console.log(`do while---------------------------------------`);

// do while
let j = 0;
do {
    console.log(array01[j]);
    j++;
} while (j < array01.length);

// separator
console.log(`for each ---------------------------------------`);

// for each loop
var array02 = Array(1,2,3,4,5, 6,7,8);
array02.forEach((s) => (console.log(s)));

// separator
console.log(`for of ---------------------------------------`);

// for of 
var array03 = Array(1,2,3,4,5, 6,7,8);
for (const iterator of array03) {
    console.log(iterator);
}

// separator
console.log(`for in ---------------------------------------`);

// for in is used in case of Objects
// creating a new object
var newObject01 = {
    // key: value
    firstName: 'Kallol',
    lastName: 'chakraborty',
    role: 'developer',
};

for (const key in newObject01) {
    console.log(`Key: ${key} and value: ${newObject01[key]}`);
}


