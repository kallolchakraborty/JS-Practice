/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 004
    program description: Conditional 
    time complexity: O(1)
    space complexity: O(1)
    date: 05/08/2021
----------------------------------------------------------*/

if (false) {
    console.log("Inside the if block");
} else {
    console.log('Inside the else block');
}
console.log('------------------------------------------')
// switch block
var keyword = "k";
switch (keyword) {
    case 'k':
        console.log("K is selected");
        break;
    default:
        break;
}
console.log('------------------------------------------')
//for loop for Odd numbers
for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) console.log(i);
}
console.log('------------------------------------------')
//While loop: Even numbers: entry control loop
let j = 0;
while (j <= 5) {
    if (j % 2 === 0) console.log(j);
    j++;
}

console.log('------------------------------------------')
//Do While: Odd numbers: executed atleast once. exit control loop
j = 0;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5);

console.log('------------------------------------------')
//for ..in loop
const person = {
    fName: 'kallol',
    lName: 'chakraborty'
};

for (const key in person) {
    console.log(`Key: ${key} && value: ${person[key]}`);
}
console.log('------------------------------------------')
//for ..of loop: iterator contains the value not the index
const color = ['red', 'blue', 'green'];
for (const key of color) {
    console.log(key);
}