"use strict";

function fibonachi(n) {
      if (n <= 0){
         return 0
      } else if (n == 1) {
         return n;
      } else {
         return fibonachi(n - 1) + fibonachi(n - 2);
      }
   
 }


