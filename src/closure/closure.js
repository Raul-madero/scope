//Permiten acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.
//A diferencia de otros conceptos los closures no son siempre utilizados.
// Aprender el concepto es saber identificar cuando los estás utilizando.
// Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto y la recuerda.

const myGlobal = 0

function myFunction() {
    const myNumber = 1
    console.log(myGlobal);

    function parent() { // funcion interna
        const inner = 2
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return child()
    }
    return parent()
}

myFunction()

function greeting() {
    let userName = 'Raul'
    function displayUserName() {
        return `Hello ${userName}`
    }
    return displayUserName
}

const g = greeting()
console.log(g);
console.log(g());