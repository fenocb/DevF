// Arboles binarios
// Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.
// Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.
// Escribe una función que visualice los nodos que están en el nivel n de un árbol binario. 
// Escribe una función que devuelva el número de hojas de un árbol binario.

class nodo{
    constructor(dato){
        this.dato = dato;
        this.left = null;
        this.right = null;
    }
}

class arbol{
    constructor(){
        this.arbolHead = null;
        this.arbolId = 0;
    }

    

    agregarNodo(data){
        const node = new nodo(data);
        
        if (this.arbolId === 0) {
            this.arbolHead = nodo;
          } else {
            let nodoActual= this.arbolHead;
            if(nodoActual.left === null){
                nodoActual
           }else{
               if(nodoActual.right === null){

               }
           }
        

        }
    }
}