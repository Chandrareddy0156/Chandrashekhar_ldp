//Q1. Write a program to demonstrate how a function can be passed
//  as a parameter to another function.
function greet() {
    console.log("It is called as a parameter function in another function");
}

function callFunction(parameterfn) {
    parameterfn();
}

callFunction(greet);

//Q2. An arrow function takes two arguments firstName and lastName 
// and returns a 2 letter string that represents
//  the first letter of both the arguments
//  For the arguments Roger and Waters,
//  the function returns ‘RW’. Write this function.


const getInitials = (firstName, lastName) => {
    return firstName[0] + lastName[0];
};


console.log(getInitials("Roger", "Waters"));