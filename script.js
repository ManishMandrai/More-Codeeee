// const arr = [10, 20 ,30];

// const [a, b, c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);


// const numbers = [12,26,73,24,85]

// const [ , , third] = numbers;
// console.log(third);


// const arrr = [50];
// const [first, second = 100] = arrr;

// console.log(first);
// console.log(second);


// const person = {name : "John", age : 25, city : "New York City"}
// const {name, age, city } = person;

// console.log(name);
// console.log(age);
// console.log(city);


// const perrson = {name : "Alice", age : 24};

// const {name : fullname, age : years} = perrson;

// console.log(fullname);
// console.log(years);

const persoon = {name : "Mike"};
const {name, age = 40} = persoon;
console.log(name);
console.log(age);


const colors = ["red", "green", "blue"]

const [, second, ] = colors 
console.log(second);

const car = {brand : "Toyota", model : "Innova"};
const {brand, model,year = 2024} = car;
console.log(brand);
console.log(model);
console.log(year);


