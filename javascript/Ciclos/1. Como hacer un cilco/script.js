// ciclo for
for (let index = 0; index < 11; index++) {
    console.log("ciclo for ", index);
    
}

//ciclo while
var indexWhile=0;
while (indexWhile<11) {
    console.log("ciclo while ", indexWhile);
    indexWhile++;
}

// Tambien se puede con palabras (condicion true/false)
var container=[];
var userInput;
while(!(userInput=="")) {
    userInput = prompt("Ingresa un valor");
    container.push(userInput);
   
}
console.log(container)