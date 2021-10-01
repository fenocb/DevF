var numero1 = Number(prompt('Escribe el primer numero'));
var numero2 = Number(prompt('Escribe el segundo numero'));

console.log('Tu primer numero es', numero1);
console.log('Tu segundo numero es',numero2);
console.log('La suma es: ', sumar(numero1,numero2));
console.log('La resta es: ',restar(numero1,numero2));
console.log('La multiplicacion es: ', multiplicacion(numero1,numero2));
console.log('La divicion es: ',divicion(numero1,numero2));

var edad = Number(prompt('Escribe tu edad'));
console.log('Eres mayor de edad=',mayorEdadStatus(edad));

var numeroPositivo = Number(prompt('Escribe el numero que quieres saber si es positivo o negativo'));
console.log('Tu numero es= ',numeroPositivoStatus(numeroPositivo));

var letra = prompt('Escribe tu letra');
console.log(vocalStatus(letra));

console.log(arregloPares());

var jugador1 =prompt('Jugador 1 escoge tu opcion').toLocaleLowerCase();
var jugador2 =prompt('Jugador 2 escoge tu opcion').toLowerCase();
console.log(piedraPapelTijeras(jugador1,jugador2));

function sumar(num1, num2) {
    if(Number==num1 || num2==Number){
        return num1 + num2;   
    }else{
        return 'Dato invalido';
    }
}

function restar(num1,num2) {
    return num1-num2;
}

function multiplicacion(num1, num2) {
    return num1*num2;
}

function divicion(num1,num2) {
    return num1/num2;
}

function mayorEdadStatus(edad) {
    if(edad>=18){
        return 'Eres mayor de edad';
    }else if(edad<18){
        return 'no Eres mayor de edad';
    }else{
        return 'valor no soportado';
    }
}

function numeroPositivoStatus(num) {
    if(num>0){
        return 'positivo';
    }else if(num<0){
        return 'negativo';
    }else if(num==0){
        return 'es 0'
    }else{
        return 'valor no soportado';
    }
}

function vocalStatus(letra) {
   
        if (letra.toLowerCase()=='a'||
        letra.toLowerCase()=='e'||
        letra.toLowerCase()=='i'||
        letra.toLowerCase()=='o'||
        letra.toLowerCase()=='u') {
            return 'Vocal';
        }else if(letra.toLowerCase()=='b'||
        letra.toLowerCase()=='c'||
        letra.toLowerCase()=='d'||
        letra.toLowerCase()=='f'||
        letra.toLowerCase()=='g'||
        letra.toLowerCase()=='h'||
        letra.toLowerCase()=='i'||
        letra.toLowerCase()=='j'||
        letra.toLowerCase()=='k'||
        letra.toLowerCase()=='l'||
        letra.toLowerCase()=='m'||
        letra.toLowerCase()=='n'||
        letra.toLowerCase()=='p'||
        letra.toLowerCase()=='q'||
        letra.toLowerCase()=='r'||
        letra.toLowerCase()=='s'||
        letra.toLowerCase()=='t'||
        letra.toLowerCase()=='v'||
        letra.toLowerCase()=='w'||
        letra.toLowerCase()=='x'||
        letra.toLowerCase()=='y'||
        letra.toLowerCase()=='z'){
            return 'Consonante';

        }else{
            return 'Valor no soportado';
        }
    }
    
function arregloPares() {
    var pares =[];
    var contador=1;
    while(contador<=100){
        if(contador%2==0) pares.push(contador);
        contador++;
    }
    return pares;
}

function piedraPapelTijeras(opcion1,opcion2) {
    console.log('Jugador 1:',opcion1);
    console.log('Jugador 2:',opcion2);

    if (opcion1=='tijera') {
        if(opcion2=='papel'){
            return 'Jugador 1 gana';
        }else if(opcion2='piedra'){
            return 'Jugador 2 gana';
        }else if(opcion2='tijera'){
            return 'empate';
        }else{
            return 'opcion invalida';
        }
    }else if(opcion1=='piedra') {
        if(opcion2=='papel'){
            return 'Jugador 2 gana';
        }else if(opcion2='piedra'){
            return 'Empate';
        }else if(opcion2='tijera'){
            return 'Jugador 1 Gana';
        }else{
            return 'opcion invalida';
        }
    }else if (opcion1=='papel') {
        if(opcion2=='papel'){
            return 'Empate';
        }else if(opcion2='piedra'){
            return 'Jugador 1 gana';
        }else if(opcion2='tijera'){
            return 'Jugador 2 gana';
        }else{
            return 'opcion invalida';
        }
    }else{
        return 'Opcion invalida'
    }
}

