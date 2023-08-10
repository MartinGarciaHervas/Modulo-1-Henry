function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
  
    //okey probemos ahora
    //  [ 7 , 2 , 8 , 5 , 3 , 9 , 4  ]
    // if( [1] ) => return array
    // dividir([])
    //  izq[]    |    der[]
    /// merge(  mergeSort(izq[]), mergeSort(der[]) )
    while(array[1]){
        let izq = dividir(array)[0];
        let der = dividir(array)[1];
        return merge(mergeSort(izq), mergeSort(der))
    } return array
  }
  
  function dividir(array) {
    // parte a la mitad
    // devuelve izq y la derecha
    let mitad = Math.round(array.length / 2);
    let izq = []; //array.slice(0,medio); ---> te ahorras el for() con este metodo
    let der = []; //array.slice(medio);        corta el array por donde le indicas

    for(let i = 0; i < array.length ; i++){
        if(i < mitad) izq.push(array[i]);
        if(i >= mitad) der.push(array[i]);
    }  return [izq, der]

  }
  
  function merge(izq, der) {
    // compara ambos
    // izq[]  < o >  der[]
    //los concatena pero en orden
    //[ ordenado ]
    // if(izq > der) return der.concat(izq);
    // if(izq < der) return izq.concat(der);
    // let aux = izq.concat(der);
    // return aux.sort((a,b) => a - b)
    let resultado = [];
    while (izq.length && der.length)
        resultado.push(izq[0] < der[0] ? izq.shift() : der.shift());
    
    
        return resultado.concat(izq.length ? izq : der);
  }

let arr = [18, 16, 2 ,3 ,4 ,5 , 6, 7, 198, 1,394, 8, ];

// // console.log(dividir(arr))
// console.log(merge([7, 18],[16, 20]));
console.log(mergeSort(arr));