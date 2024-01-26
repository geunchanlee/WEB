//object destructuring
const person = {
    name: 'lee',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

// 구조 분해
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name,age);

const hobbies = ['Bass', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);
