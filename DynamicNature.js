/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 016
    program description: Dynamic Nature of Objects Practice
    time complexity:
    space complexity:
    date: 29/11/2021
----------------------------------------------------------*/

function CircleDraw(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log(`Radius is ${radius}`);
        }
}

const circle2 = new CircleDraw(6);

// adding a new member
circle2.color = 'yellow';
circle2.newFunction = function () {
    console.log(`The color of the circle is ${this.color}`);
}

console.table(circle2);

