// LINKEDLISTS

// function Nodo(data) {
//   this.data = data;
//   this.next = null;
// }

// function LinkedList() {
//   this._length = 0;
//   this.head = null;
// }

// let miLista = new LinkedList();

// console.log("lista vacia", miLista);

// // INSERTAR NODOS

// LinkedList.prototype.insert = function (data) {
//   let node = new Nodo(data);

//   let current = this.head;

//   if (!current) {
//     this.head = node;
//   } else {
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = node;
//   }

//   this._length++;
// };

// miLista.insert("Bartolomiau");

// console.log(miLista);

// miLista.insert("Palta");

// console.log(miLista);

// miLista.insert("Tota");
// miLista.insert("Milaneso");

// console.log(miLista);

// // Extraer Nodos

// LinkedList.prototype.delete = function () {};

// // ver el tamano de la lista
// LinkedList.prototype.size = function () {};

// //
// LinkedList.prototype.changeHead = function (data) {
//   // ? head ese head lo paso next
//   //? head = data
// };

/// HASH TABLE

//  Martin: martinito@gmail.com  => 6
//  Geronimo: gero@gmail.com  => 8
//  Franco: fran@gmail.com  => 6
// Sol: minovia@gmail.com  => 3

//funcion hash(){ nombre a un numero } {9218374bnkqjbkj-246asdf-atsa4e52}

// HashTable [  1{}, 2{},3{Sol: minovia@gmail.com  => 3} ..... ,6[ { Franco: fran@gmail.com } , {Martin: martinito@gmail.com}],7{Francoi: fran@gmail.com },8{Geronimo: gero@gmail.com }  ]