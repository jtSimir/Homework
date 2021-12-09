"use strict";
var a = "*";
var c = "";

for (let i = 1; i <= 19; i++){
   
   c = a + c;

   if (i%2 == 0){
      a = "*";
   } else {
      a = "-";
   }

   console.log(c);
}
