//Block Scope
//En ES6 se introdujeron las palabras let y const para crear variables que solo podrán ser utilizadas dentro del bloque de codigo dentro del cual fueron declaradas

function fruits() {
    if(true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi' //block Scope
        const fruit3 = 'Banana' //block Scope
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits()