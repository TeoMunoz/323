const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];

  const studentFeedback = [
    'Nice Job Joe, you got an b',
    'Excellent Job Jen, you got an a',
    'Well done Steph, you got an c',
    'What happened Allen, you got an d',
    'Not good Gina, you got an f',
  ]; 

const greet = (greeting) => {
    function greetStudent(name) {
        return `${greeting} ${name}`;
    }
    return greetStudent;
}

console.log(studentGrades.map(greet(studentFeedback)))

const R = require("./rambda.min.js");

const names = ["Teo", "Noel", "Marcos"];

const greet = R.curry((greeting, after, names) => {
    return `${greeting} ${names} ${after}!`;
});

const hello = greet("Hello");
console.log(names.map(hello));

console.log(names.length);