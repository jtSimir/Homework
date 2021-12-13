"use strict";

// Function Declaration
function avg(a) {
   let sum = 0;
      for (let i = 0; i < arguments.length; i++){
         sum += arguments[i];
      }
      return sum / arguments.length;      
}

//Function Expression 
const avg = function (a) {
   let sum = 0;
   for (let i = 0; i < arguments.length; i++){
      sum += arguments[i];
   }
   return sum = sum / arguments.length;
}

//Arrow Function
const changeValue = (...a) => {
   for (let i = 0; i < a.length; i++){
      sum +=a[i];
   }
   return sum / a.length;
}
