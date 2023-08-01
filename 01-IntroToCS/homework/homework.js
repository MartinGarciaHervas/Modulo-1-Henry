'use strict';

function BinarioADecimal(num) {
   let number = num;
   let numberarray = number.split("").reverse();
   let count = 0;

   for(let i=0; i < numberarray.length; i++){
      if(+numberarray[i] === 1){
         count = count + (2 ** i)  // count = count + ------> count +=
      };
   }
   return count;
}

//Se puede usar el metodo Reduce() ----> medio falopa

function DecimalABinario(num) {
   let number = num;
   let numberarray = [];
   do {
      number = Math.floor(number)
      if(number % 2 === 0){
         numberarray.unshift(0);
      } else {
         numberarray.unshift(1);
      }
      number = number / 2;
   } while (number >= 1);

   let binary = numberarray.join("");
   return binary
}

// while(num => 1){
//    let res = Math.trunc(num % 2);

//    num = num / 2;
//    numberarray.unshift(res);
// }
// return numberarray.join("")

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
