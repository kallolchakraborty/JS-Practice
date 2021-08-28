/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 007
    program description: this
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

// Empty Scope as it is run with node
console.log(this);

// If the same code is run in browser, then WINDOW scope will come
// for all regular function calls, this points to the WINDOW object

// creating a new object
var newObject01 = {
    // key: value
    firstName: 'Kallol',
    lastName: 'chakraborty',
    role: 'developer',
    skills: [],
    addSkills: function (skill) {
        this.skills.push(skill);
    },
    countSkills: function () {
        return `${this.firstName} ${this.lastName} has ${this.skills.length} no. of skills.`;
    },
    displaySkills: function(){
        console.log('Hello, I am Kallol !');
        function sayHello() {
            console.log('Line 30', this); 
        }
        sayHello();
    }
};

// adding skills 
newObject01.addSkills('javascript');
newObject01.addSkills('ABAP/4');
// adding more skills 
newObject01.addSkills('Data Structures');
newObject01.addSkills('Algorithms');

// displating all the info
console.table(newObject01);

// printing the number of skills added before
console.log(newObject01.countSkills());

console.log(newObject01.displaySkills());