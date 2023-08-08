'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let numero = num;
  let array = [];
  let primo = 2;
   //dividir el nro por el nro primo mas chico posible //2 3 5 7 9 11 13 17 19 23
   while (numero > 1){
    while(numero % primo === 0){
        array.push(primo)
        numero = numero / primo;
    } primo++
   } array.unshift(1)
   return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let newArray = array;
  let cambio = true;

 while(cambio){
  cambio = false;    //una vez que entra ya lo cambia directo a false
  for(let i = 0; i+1 < newArray.length; i++){     //esto significa que es el anteulitmo elemento del array, ya si toma el ultimo no entraria a analizarse porq no tiene nada al lado
    if(newArray[i] > newArray[i+1]){
      let aux = newArray[i];
      newArray[i] = newArray[i+1];
      newArray[i+1] = aux;
      cambio = true;
    }
  }
 } return newArray
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let newArray = array;

  for(let j = 1; j < array.length; j++){
    for(let i = j-1; newArray[j] < newArray[i]; i-- && j--){
      if(newArray[j] < newArray[i]){
        let aux = newArray[j];
        newArray[j] = newArray[i];
        newArray[i] = aux;
      } 
    }
  } return newArray;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      let actualMenor = array[i];
      if(actualMenor < array[j]){
        actualMenor = array[j];
        array[j] = array[i];
        array[i] = actualMenor
      }
    }
  } return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
