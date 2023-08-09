'use strict'
// No cambies los nombres de las funciones.

function factorear(numero) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let primo = 2;
   //dividir el nro por el nro primo mas chico posible //2 3 5 7 9 11 13 17 19 23
   while (numero > 1){
    while(numero % primo === 0){
        array.push(primo)
        numero = numero / primo; // se puede escribir como numero /= primo
    } primo++
   } return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let cambio = true;

 while(cambio){
  cambio = false;    //una vez que entra ya lo cambia directo a false
  for(let i = 0; i+1 < array.length; i++){     //esto significa que es el anteulitmo elemento del array, ya si toma el ultimo no entraria a analizarse porq no tiene nada al lado
    if(array[i] > array[i+1]){
      let aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
      cambio = true;
    }
  }
 } return array
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let j = 1; j < array.length; j++){
    for(let i = j-1; i >= 0 && array[j] < array[i]; i-- && j--){
      if(array[j] < array[i]){
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      } 
    }
  } return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //      [7,  5,  2,  3 ,  1  ]
  //       i
  //                        j
  // min = 7
  for(let i = 0; i < array.length; i++){
    let actualMenor = i;
    for(let j = i+1; j < array.length; j++){
      if(array[actualMenor] > array[j]){
        actualMenor = j;
      }
    } if(array[i] > array[actualMenor]){
      let aux = array[i];
      array[i] = array[actualMenor];
      array[actualMenor] = aux;
    }
  } return array;
}
console.log(selectionSort([7,  5,  2,  3 ,  1  ]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
