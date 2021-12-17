"use strict";

function factorial(n) {
   if (n == 0){ 
      return n = 1
   } else if (n < 0){
      return NaN
   }   else {   
      if (n == 1) {
         return n;
      } else {
         return n * factorial(n - 1);
      }
   }
 }