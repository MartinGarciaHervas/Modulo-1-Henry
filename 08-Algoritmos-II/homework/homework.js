'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]
  //
  //  if([1]) => devuelvo el array
  // let pivote = Math.random() --->>> chequen que el valor del indice este dentro del array
  // recorrer el array i < pivote lo mando a la izq[] si i > pivote lo mando a la derecha[]
  //             [1]          [1]
  // quickSort(izq)   quickSort(der)
  // return el array ordenado
  while (array[1]) {

    let pivot = Math.floor(Math.random() * array.length)
    let izq = [];
    let der = [];

for(let i = 0; i < array.length; i++){
    if(array[i] <= array[pivot] && i !== pivot) izq.push(array[i])
    if(array[i] > array[pivot]) der.push(array[i]);   
} return quickSort(izq).concat(array[pivot]).concat(quickSort(der))
} return array;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  while(array[1]){
      let izq = dividir(array)[0];
      let der = dividir(array)[1];
      return merge(mergeSort(izq), mergeSort(der))
  } return array
}


function dividir(array) {
  
  let mitad = Math.round(array.length / 2);
  let der = array.slice(mitad) //  slice() es un metodo q me resume lo que hacia en el for
  let izq = array.slice(0, (mitad))
  
  return [izq, der]

  // let der = [];
  // let izq = [];
  
  // for(let i = 0; i < array.length ; i++){
  //       if(i < mitad) izq.push(array[i]);
  //       if(i >= mitad) der.push(array[i]);
  //   }return [izq, der]
  }
  
  function merge(izq, der) {
  
    let res = [];
    while (izq.length && der.length)
      res.push(izq[0] < der[0] ? izq.shift() : der.shift());
    return res.concat(izq.length ? izq : der);
  }
  console.log(mergeSort([2,7,5,9,1,100,56,17,24]));
  
  // No modificar nada debajo de esta línea
  // --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
