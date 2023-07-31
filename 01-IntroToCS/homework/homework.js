'use strict';

function BinarioADecimal(num) {
   var number = num;
   var numberarray = number.toString().split("").reverse();
   var count = 0;

   for(var i=0; i < numberarray.length; i++){
      if(+numberarray[i] === 1){
         count = count + (2 ** i)
      };
   }
   return count;
}

function DecimalABinario(num) {
   var number = num;
   var numberarray = [];
   do {
      number = Math.floor(number)
      if(number % 2 === 0){
         numberarray.push(0);
      } else {
         numberarray.push(1);
      }
      number = number / 2;
   } while (number >= 1);

   var binary = numberarray.reverse().join("");
   return binary
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
