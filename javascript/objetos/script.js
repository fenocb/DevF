class perro{
    constructor(nombre, raza, color){
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    ladrar(){
        return 'wauu';
    }

    ladrar(frase){
        return frase + ' wuau';
    }

    comer(comida = 'croquetas'){
        return `${this.nombre} esta comiendo ${comida}`
    }
}

const PerroCoraje = new perro('Coraje','Animado','Rosa');

console.log(PerroCoraje);
console.log(PerroCoraje.nombre);
console.log(PerroCoraje.color);
console.log(PerroCoraje.raza);
console.log(PerroCoraje.ladrar('Lo que hago por amor'));
console.log(PerroCoraje.comer('caricaturas'));