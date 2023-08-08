"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [7  ,  8,  5,  2  ,11]
  //  i  > i+1
  // si es mayor intercambio
  // Recorro los punteros
  // generar un marcador que  que incialmente sea true
  // let swap = true ====> si llego ha hacer un cambio lo modifio a true
  // mientras que swap sea true tengo que seguir haciendo el ordenamiento
  // 2 for  o 1 while
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //  [7  ,  8,  5,  2  ,11]
  //         i
  //                 j
  // segundo elemento  j = i+1
  // comparo con el anterior i
  // lo invierto (ojo aqui utiolizar un auxiliar para no perder el valor)
  // while
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //  [2  ,  8,  5,  7  , 11]
  //        i
  //             j
  // let min =   i = 0
  // i < j
  // min = j   // 5
  // si termine de recorrer el array coloco el valor min en la posicion de i
  // recorro ambos marcadores
  // ocupen 2 for
}