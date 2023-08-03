const cb = function(x) {
    return x * 2;
  };



  function cacheFunction(cb){
    let cache = {};
    return function (num){
      if (cache.hasOwnProperty(num)){
      return cache[num];
    } else {
      
      cache[num] = cb(num);
      return cache[num];
    }
  //   return function (num){
  //   return cache.hasOwnProperty(num) ? cache[num] : cache[num] = cb(num); //ternario ---> sirve para algunos condicionales simples como este.
  // }
  }
}



const squareCache = cacheFunction(cb);

console.log(squareCache(5));
console.log(squareCache(6));
console.log(squareCache(7));
console.log(squareCache(8));

// function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
//   return delimitadorIzquierda + cadena + delimitadorDerecha;
// }

// let textoAsteriscos = crearCadena.bind(crearCadena, "*", "*");
// let textoGuiones = crearCadena.bind(null, "-", "-");
// let textoUnderscore = crearCadena.bind(this, "_", "_");



// console.log(textoAsteriscos("hola"));
// console.log(textoGuiones("hola"));
// console.log(textoUnderscore("hola"));
