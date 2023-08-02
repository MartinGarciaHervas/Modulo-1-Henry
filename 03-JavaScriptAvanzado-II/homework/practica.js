const cb = function(x) {
    return x * 2;
  };



function cacheFunction(cb){
  
  let cache = {};
  return function (num){
    if (cache.hasOwnProperty(num)){
      console.log(cache);
      return cache[num];
  } else {
      let resultado = cb(num)
      cache[num] = resultado;
      console.log(cache);
      return resultado;
  }
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
