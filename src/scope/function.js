//Function scope
//Las variables declaradas dentro de una funcion solo pueden ser utilizadas dentro de la funcion que se hayan declaradadas
function greeting(){
    let userName = 'Ana'
    console.log(userName);

    if(userName === 'Ana') {
        console.log(`Hello ${userName}`);
    }
}
greeting()

console.log(userName);