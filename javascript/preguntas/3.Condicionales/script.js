//var nombre = prompt('¿Cual es tu nombre?');
//var edad = Number(prompt('¿Cual es tu edad?'));
//var embarasadaStatus = prompt('¿Estas embarazada? (Si/No)').toLowerCase;
//var fronterizoStatus = prompt('¿Eres fronterizo? (Si/No)').toLowerCase;

//if(edad => 18 && embarasadaStatus==='si' && fronterizoStatus === 'si'){
//    console.log('Pasa a vacunarte');
//}else{
//    console.log('No puedes vacunarte');
//};

var jugador1 = prompt('Selecciona tu opcion jugador 1 (Piedra/Papel/Tijera)').toLowerCase();
var jugador2 = prompt('Selecciona tu opcion jugador 2 (Piedra/Papel/Tijera)').toLowerCase();

console.log('Jugador 1 ->' + jugador1 + '\n' + 'Jugador 2 ->'+ jugador2);


if((jugador1==='piedra' && jugador2 === 'piedra') ||//Casos de empate
(jugador1==='papel' && jugador2 === 'papel') ||
(jugador1==='tijera' && jugador2 === 'tijera')){
    console.log('Es un Empate');
    
}else if((jugador1 === 'piedra' && jugador2 === 'papel') ||//Casos que jugador 2 gana
(jugador1 === 'papel' && jugador2 === 'tijeras') ||
(jugador1 === 'tijera' && jugador2 === 'piedra')){
    console.log('Jugador 2 Gana');

}else if((jugador1 === 'piedra' && jugador2 === 'tijera') ||//Casos que jugador 1 gana
(jugador1 === 'papel' && jugador2 === 'piedra') ||
(jugador1 === 'tijeras' && jugador2 === 'papel')){
    console.log('Jugador 1 Gana');

}else{
    console.log('opcion invalida');
};
