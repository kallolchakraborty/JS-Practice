/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 015
    program description: OOP Practice
    time complexity:
    space complexity:
    date: 29/11/2021
----------------------------------------------------------*/
// methods are functions within objects in OOP
// better way of declaring objects
let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('Draw Function is called !');
    }
};

// calling the function
circle.draw();



// factory functions to create objects: uses the camel notation
function createCircle(radius) {
    return {
        radius, // if the parameter and member object is of same name, we can use only the parameter
        draw() {
            console.log(`Radius is ${radius}`);
        }
    };
}

// declaring the object
let circle1 = createCircle(5);

// calling the method
circle1.draw();

/* 
Camel Notation: oneTwoThreeFour
Pascal Notation: OneTwoThreeFour
*/

// another way of declaring objects
// constructor function : no return statement as it will work under the hood & uses pascal notation
function CircleDraw(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log(`Radius is ${radius}`);
        }
}

// creating the objects
const circle2 = new CircleDraw(6);
circle2.draw();


