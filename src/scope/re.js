//Reasignacion y Redeclaracion de variables

//VAR
var firstName; //Undefined
firstName = 'Raul'
console.log(firstName);

var lastName = 'Madero' //declarar y asignar
lastName = 'Ramirez' //reasignar
console.log(lastName);

var secondName = 'Ana' // declarar y asignar
var secondName = 'Gustavo' //redeclarar y reasignar
console.log(secondName);

//LET

let fruit = 'Apple'// declarara y asignar
fruit = 'Kiwi' // reasignar
console.log(fruit);
// let fruit = 'Banana'

//CONST
//No es posible reasignar una variable de tipo const
const animal = 'dog'
// animal = 'cat'
console.log(animal);

const vehicles = []
vehicles.push('carro')
console.log(vehicles);
vehicles.pop()
console.log(vehicles);
