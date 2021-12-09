"use strict";

const firstArr = [1, 2, 3, 5, -10, 6, 90, 23, -8]
const secondArr = [1, -2, 50, 9, 8, 15, 2]
const thirdArr = [1, 2, 3, 5, 19, 76, -67, 78]
let firstSum; 
let secondASum; 
let thirdSum; 

function sum(arr) {
   var a = 0;
   for (let i = 0; i < arr.length; i++){      
   if (arr[i]%2 !== 0 && arr[i] > 0){  
      a = arr[i] + a;
   }
   }
   console.log(a)
   return a
}

sum(firstArr);
sum(secondArr);
sum(thirdArr);
