/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 017
    program description: Reference objects & object clonning
    time complexity:
    space complexity:
    date: 29/11/2021
----------------------------------------------------------*/

// Primitive(numbes, strings, booleana, symbols) types are copied by value 
// Object, function & arrays are copied by the reference

//x = { value: 10 };

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Copying objects
const another = Object.assign({}, circle);
console.log(another);

// Using spread operator
const another1 = { ...circle };
console.log(another1);


