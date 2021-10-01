// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antiguedad" que guarda un valor numerico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.

class Maestro{
constructor(materia){
    this.materia=materia;
}

calcularPromedio(calificaciones = []){
    var suma=0;
    calificaciones.forEach(element => {
        suma+=element;

    });
    console.log(suma/calificaciones.length); 
    }
}

class MaestroFisica extends Maestro{
    constructor(antiguedad){
        this.antiguedad=antiguedad;
        super("fisica");
    }
}

class MaestroMusica extends Maestro{
    constructor(edad){
        this.edad=edad;
        super("musica");
        
    }
}

var a = new Maestro("fisica");
a.calcularPromedio([1,2,3]);

/*
------------------------------------------------------------
2.- Crea una superclase llamada Electrodoméstico con las 
    siguientes características:
    a. Sus atributos son precio, color, consumoEnergetico
       y capacidad (peso máximo)
    b. El constructor solo debe pedir precio, color 
       y capacidad. 
    c. consumoEnergetico debe iniciar con valor de 100
------------------------------------------------------------
*/


class Electrodomestico{
    constructor(precio,color,capacidad){
        this.precio=precio;
        this.color=color;
        this.consumoEnergetivo=100;
        this.capacidad=capacidad;
    }
}

/*
------------------------------------------------------------
3.- Crea una subclase de Electrodomestico llamada Lavadora 
    con las siguientes características:
    a. Su atributo es carga(kg de ropa), además de los 
       atributos heredados.
    b. Crea el método precioFinal(). Este se calcula
       multiplicando el consumoEnergetico por la carga.
------------------------------------------------------------
*/

class Lavadora extends Electrodomestico{
    constructor(carga){
        super(10,"color",10);
        this.carga=carga;
        
       
    }
    precioFinal(){
        console.log(`Precio total `, this.consumoEnergetivo*this.carga);
    }
}
var refri= new Lavadora(40);
refri.precioFinal();

/*
------------------------------------------------------------
4.- Crear la clase construcción que hereda a otras dos 
    clases "casa" y "edificio". 
    a. Sus atributos son: numPuertas, numVentanas, numPisos,
       direccion, altura, largo y ancho del terreno.
    b. Cada uno tiene un metodo que regresa los metros 
       cuadrados
    c. Un metodo debe regresar la direccion
    d. Un metodo debe permitir modificar la direccion
    e. Buscar la mejor manera de aprovechar la herencia
------------------------------------------------------------
*/

class Construccion{
    constructor(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho){
        this.numPuertas=numPuertas;
        this.numVentanas=numVentanas;
        this.numPisos=numPisos;
        this.direccion=direccion;
        this.altura=altura;
        this.largo=largo;
        this.ancho=ancho;
    }
    area(){
        console.log(`Los metros cuadrados son: `, this.largo*this.ancho);
    }
    ubicacion(){
        console.log(`La ubicacion esta en: ${this.direccion}`);
    }
    modifDireccion(nuevaDireccion){
        this.direccion=nuevaDireccion;
    }

}
class casa extends Construccion{
    constructor(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho){
        super(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho);       
    }

}

class edificio extends Construccion{
    constructor(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho){
        super(numPuertas,numVentanas,numPisos,direccion,altura,largo,ancho);     
    }
}

var miCasa = new casa(4,4,2,"miCasa",1.2,2,2);

console.log(miCasa);
miCasa.modifDireccion("tu Casa");
console.log(miCasa.direccion);
miCasa.area();



/*
------------------------------------------------------------
5.- Crear una clase Bebida que herede a dos clases Cerveza 
    y Refresco. Ambas clases deben tener la propiedad 
    cantidad (ml). La clase Refresco debe tener el atributo
    azucar(g) y la clase Cerveza debe el atributo 
    porcentajeAlcohol. Crear los getters y setters
    correspondientes.
------------------------------------------------------------
*/

class Bebida{
    constructor(cantidad){
        this.cantidad=cantidad;
    }
    getCantidad(){
        return this.cantidad;
    }
    setCantidad(cantidad){
        this.cantidad=cantidad;
    }

}

class Cerveza extends Bebida{
    constructor(porcentajeAlcohol,cantidad){
        super(cantidad);
        this.porcentajeAlcohol=porcentajeAlcohol;
    }
    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }
    
    setPorcentajeAlchol(porcentajeAlcohol){
        this.porcentajeAlcohol=porcentajeAlcohol;
    }
    
}

class Refresco extends Bebida{
    constructor(azucar,cantidad){
        super(cantidad);
        this.azucar=azucar;
    }
    getAzucar(){
        return this.azucar;
    }
    setAzucar(azucar){
        this.azucar=azucar;
    }
}

var soda=new Refresco(50,600);
console.log(soda.getAzucar());
soda.setAzucar(80);
console.log(soda.getAzucar());

