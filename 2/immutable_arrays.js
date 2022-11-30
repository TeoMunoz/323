const persons = [ 
    { id: 1, name: "Teo" },
    { id: person1.id + 1, name: "Anna", age: 29}
]

const person1 = [
    ...persons,
    { id: 1, name: "Teo", }
]

const person2 = [
    ...persons,
    { id: person1.id + 1, name: "Anna", age: 29}
]

const updatePerson = persons.map(changeName);
function changeName(person) {
    if (person.id === 2) {
        return { ...person, name: "Anna" };
    }
    return person;
}

const reducedPerson = persons.filter((persons) =>{
    return person.id !== 1;
})

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];
let sum = reviews.reduce((previous, current) => current += previous);
let avg = sum / reviews.length;

for (let i = 0; i < reviews.length; i++) {
  if(reviews <= 4){
    console.log("good")
  }
  else if(reviews <= 2.5){
    console.log("ok")
  }
  else{
    console.log("bad")
  }
}