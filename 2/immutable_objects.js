const person1 = {
    name: Teo,
    lastName: Muñoz,
    secontLastName: Blasco,
    age: 12
}

const person2 = {
    ...person1,
    name: person1.name,
    lastName: person1.lastName,
    secontLastName: person1.secontLastName,
    age: age
};

const { age } = person1;