/*---------------------------------------------------------
    author: kallol chakraborty
    program no: 012
    program description: Methods
    time complexity: 
    space complexity: 
    date: 28/08/2021
----------------------------------------------------------*/

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
};

// printing 0 skills as no skill is added
console.log(newObject01.countSkills());

// adding skills 
newObject01.addSkills('javascript');
newObject01.addSkills('ABAP/4');

// printing the number of skills added before
console.log(newObject01.countSkills());

// displating all the info
console.table(newObject01);