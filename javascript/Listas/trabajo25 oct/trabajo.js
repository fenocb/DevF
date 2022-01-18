//Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.

/*
Escribir un programa para formar una lista que realice las siguientes tareas:
a) Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
b) Recorrer la lista para mostrar los Elementos por pantalla.
c) Mostrar todos los Nodos que superen un valor determinado. 
*/

/*
class Node {
    constructor(data){
      this.data = data;
      this.next = null;
    }
  };
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    addAtEnd(data){
      const node = new Node(data);
  
      if (this.head === null) {
        this.head = node;
      } else {
        let currentNode = this.head;
  
        // While: mientras (condicion: se cumpla la conducion) { hace el codigo }
        while(currentNode.next) { // Verifico si next tiene un nodo
          currentNode = currentNode.next; // Sustituyo el valor del nodo que vive en ext a mi nodo actual
        }
        // cuanto next sea nulo, sale del whiole y continua con el resto del codigo.
  
        currentNode.next = node;
      }
  
      this.length++;
    }
  
    addAtStart(data){
      const node = new Node(data);
  
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
  
      this.length++;
    }
  
    get(index){
      if (this.head === null || index > this.length) {
        return null;
      } else {
        let counter = 1;
        let currentNode = this.head;
  
        while(counter !== index) {
          counter++;
          currentNode = currentNode.next;
        }
  
        return currentNode;
      }
    }
  
    delete(data) {
      let currentNode = this.head;
      let previousNode = null;
  
      if (currentNode.data === data) {
        this.head = currentNode.next;
      } else { 
        while (currentNode.data !== data && currentNode.next !== null) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
  
      this.length--;
    }
  };
  
  const myLinkedList = new LinkedList();
  // Primera iteracion
  console.log(myLinkedList);
  // Agregando un nodo al final
  myLinkedList.addAtEnd(1);
  // Segunda iteracion
  console.log(myLinkedList);
  // Agregando un nodo al final
  myLinkedList.addAtEnd(2);
  // Tercera iteracion
  console.log(myLinkedList);
  // agrego un nodo al inicio
  myLinkedList.addAtStart(0);
  // Cuarta iteracion
  console.log(myLinkedList);
  // Busqueda de un nodo por el indice
  // console.log('get',myLinkedList.get(3));
  
  console.log(myLinkedList.isEmpty());
  myLinkedList.delete(1);
  console.log(myLinkedList);
  myLinkedList.delete(0);
  console.log(myLinkedList);
  myLinkedList.delete(2);
  console.log(myLinkedList);
  console.log(myLinkedList.isEmpty());
  */

class nodo{
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

class lista{
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addAtEndRandom(){
            const node = new nodo(Math.random());
    
            if (this.head === null) {
              this.head = node;
            } else {
              let currentNode = this.head;
    
              // While: mientras (condicion: se cumpla la conducion) { hace el codigo }
            while(currentNode.next) { // Verifico si next tiene un nodo
                currentNode = currentNode.next; // Sustituyo el valor del nodo que vive en ext a mi nodo actual
            }
            // cuanto next sea nulo, sale del whiole y continua con el resto del codigo.
    
            currentNode.next = node;
            }
    
            this.length++;
       
        
      }

      addAtEndNoRepeat(data){
          
        const node = new nodo(data);

        if (this.head === null) {
          this.head = node;
        } else {
          let currentNode = this.head;

          // While: mientras (condicion: se cumpla la conducion) { hace el codigo }
        while(currentNode.next) { // Verifico si next tiene un nodo
            currentNode = currentNode.next; // Sustituyo el valor del nodo que vive en ext a mi nodo actual
        }
        // cuanto next sea nulo, sale del whiole y continua con el resto del codigo.

        currentNode.next = node;
        }

        this.length++;
   
    
  }

  showNodes(){
    let currentNode = this.head;

    while(currentNode.next) { // Verifico si next tiene un nodo
        
        if(currentNode.next!=null){
            console.log(currentNode.data);
            currentNode = currentNode.next;
            console.log(currentNode.data)
            return false;
        }
         // Sustituyo el valor del nodo que vive en ext a mi nodo actual
    }  
  }
}
const primeraLista = new lista();
console.log(primeraLista);
primeraLista.addAtEndRandom();
console.log(primeraLista);
primeraLista.addAtEndRandom();
console.log(primeraLista);
console.log("Muestra todos los nodos");
primeraLista.showNodes();

