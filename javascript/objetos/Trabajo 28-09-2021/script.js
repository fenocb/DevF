
//---Ejercicio 1----
// 1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia
//     https://en.wikipedia.org/wiki/List_of_fictional_penguins
//     Crea un objeto llamado myPenguin con propiedades que representen
//     la información listada en cada columna en esa página de wikipedia
//     (por ejemplo: character, origin...)
var myPinguin = {
    character: 'Alfred',
    origin: 'Zig et Puce',
    creator: 'Alain Saint-Ogan',
    notes: 'The pet penguin of the title characters. The Angoulême International Comics Festival named the Prix Alfred award after the character',
};

//---Ejercicio 2---
// 2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
//   de bienvenida. La salida debe ser algo como:
//   "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"
console.log(`Hola, Me llamo ${myPinguin.character} y  soy un pingÜino `);

//---Ejercicio 3---
myPinguin.puedeVolar = false;
console.log(`Puede volar: ${myPinguin.puedeVolar}`);

//---Ejercicio 4---
myPinguin.graznar=function(){
    return 'kaww kaww!!'
}
console.log(`Graznar: ${myPinguin.graznar()}`)

//---Ejercicio 5---
myPinguin.saludar=function() {
    this.saludo=`Hola, Me llamo ${myPinguin.character} y  soy un pingÜino `;
    console.log(this.saludo);
    // return this.saludo;

}
myPinguin.saludar();


//---Ejericicio 6---
// 6.- Sin modificar el código previo, cambia el nombre del pingüino a
//   "Señor Pingu" y llama al método "saludar" para verificar que
//   se ha aplicado el cambio correctamente.
myPinguin.character = 'Señor Pingu';
myPinguin.saludar();

//--Ejercicio 7---
// 7.- Escribe otro método llamado 'volar'. Con este método imprime en
//   consola el mensaje "¡Puedo volar!" si el pingüino tiene 'true'
//   en su atributo 'puedeVolar'. De lo contrario, muestra el mensaje
//   "No puedo volar :("

myPinguin.volar=function(){
    if(myPinguin.puedeVolar){
        console.log('¡Puedo volar!');
    }else{
        console.log('No puedo volar');
    }
}
myPinguin.volar();

//---Ejercicio 8---
// 8.- Cambia la propiedad "puedeVolar" de tu pingüino a "true". Manda a 
//   llamar el método 'volar' para verificar que el cambio se efectuó
//   correctamente.
myPinguin.puedeVolar=true;
myPinguin.volar();

//--Ejercicio 9---
// 9.- Crea un objeto que contenga información de una receta 
//   para preparar Mole. Debe contener las propiedades de
//   título (string), porciones (numero) e ingredientes (un
//   arreglo de strings). Muestra la información de la receta
//   para que luzca así:
  
//   Mole
//   Porciones: 2
//   Ingredientes:
//   canela
//   comino
//   cocoa

var receta ={
    titulo : 'Mole',
    porciones : 2,
    ingredientes : ['canela','comino','cocoa']
};
console.log(receta.titulo);
console.log(`porciones: ${receta.porciones}`);
receta.ingredientes.forEach(element => {
    console.log(element);
});

//---Ejercicio 10--- 
// 10.- Crea un arreglo de objetos, donde cada objeto describa 
//   un libro y tenga las propiedades para titulo(string),
//   autor(string) y leido(booleano para indicar si se ha 
//   leido o no). Itera sobre el arreglo de libros, y por 
//   cada libro imprime el titulo y autor, junto con su 
//   status de lectura (si ya ha sido leído, o no).

var libro =[{
    titulo : 'libro1',
    autor : 'autor1',
    leido : false
},
{
    titulo : 'libro2',
    autor : 'autor2',
    leido : true
},
{
    titulo : 'libro3',
    autor : 'autor3',
    leido : true
}]

libro.forEach(element => {
    console.log(element);
});

//--Ejercicio 11---
// 11.- Haz una clase llamada Persona que siga las siguientes condiciones:
//  Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
//  calcularIMC()
//  esMayorDeEdad()
//  El constructor pide nombre, edad,sexo,peso y altura
//  Generar el RFC a partir de el nombre, edad y sexo

class Persona{

    constructor(nombre,edad,sexo,peso,altura){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
    }
    calcularIMC(){
        return this.peso/Math.pow(this.altura,2);
    }    
    esMayorDeEdad(){
        if(this.edad>=18) return 'Es mayor de edad'
        else return 'Es menor de edad'
    }


}
var marco = new Persona('Marco',24,'M',68,1.73);
console.log(marco.esMayorDeEdad());


/* Ejercicio 12
-----------------------------------------------------------------------
12.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
 -Titular y cantidad
 -ingresar(cantidad)
 -retirar(cantidad)
 Hacer las validaciones previas
 Como regla de negocio no debe de tener más de $900 y menos de $10
-----------------------------------------------------------------------
*/
class Cuenta{
    constructor(titular,cantidad){
        this.cantidad=cantidad;
        this.titular=titular;
    }
    ingresar(cantidad){
        if ((this.cantidad+cantidad)>900) {
            return 'No puede ingresar, excede el limite';
        }else{
            this.cantidad+=cantidad;
            return `Ingreso exitoso su saldo es ${this.cantidad}`
        }
    }
    retirar(cantidad){
        if(this.cantidad-cantidad<10){
            return 'No puede retirar, excede el limite'
        }else{
            this.cantidad-=cantidad;
            return `Retiro exitoso su saldo es ${this.cantidad}`
        }
    }
}
var cuenta1 = new Cuenta('Marco',10);
console.log(cuenta1.ingresar(800));
console.log(cuenta1.retirar(800));