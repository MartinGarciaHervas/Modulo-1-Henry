/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
    this.root = value;
    this.left = null;
    this.right = null;
    this.size = 1;
    }
    
    BinarySearchTree.prototype.size = function(){
        return this.size
    };
    
    BinarySearchTree.prototype.insert = function(value){

       if (value < this.root) {
        if(this.left === null){
        this.left = new BinarySearchTree(value);
        } else {
            this.left.insert(value);
        }
       }

       if (value > this.root) {
        if(this.right === null) {
            this.right = new BinarySearchTree(value);
        } else {
            this.right.insert(value);
        }
       }
       this.size++
    };
    
    BinarySearchTree.prototype.contains = function (value) {
        let found = false;
        
        if(this.root === value) return true;

        if(this.left && this.left) found = this.left.contains(value);

        if(this.right && this.right) found = this.right.contains(value);
        
        return found;
    };
    
    BinarySearchTree.prototype.depthFirstForEach = function(){};
    
    BinarySearchTree.prototype.breadthFirstForEach = function(){};

    let miArbol = new BinarySearchTree(10);

    miArbol.insert(11);
    miArbol.insert(12);
    miArbol.insert(9);
    miArbol.insert(8);
    miArbol.insert(1);
    console.log(miArbol.size);

    console.log(miArbol);
    console.log(miArbol.contains(1));