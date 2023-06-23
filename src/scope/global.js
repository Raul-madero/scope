//variables
var a //declarando variable
var b = 'b' // declaramos / asignamos
b = 'bb'//reasignacion
var a = 'aa' //redeclaracion

//Global Scope
//Cualquier variable que se encuentre en el documento pasan a ser variables globales
var fruit = 'apple' //global

function bestFruit() {
    console.log(fruit);
}

bestFruit()

function countries() {
    country = 'Colombia' //se declara la variable como global dentro de una funcion
    console.log(country);
}
countries()
console.log(country);