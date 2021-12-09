"use strict";

const arr = [1, 2, -8, 4, 7, 10, 24, -5, 90, 80, 91];
var sumPositive = 0;

for (let i=0; i <= arr.length; i++){
      if (arr[i]%2 === 0 && arr[i] > 0) {
      sumPositive = sumPositive + arr[i];
   }
}
console.log(sumPositive)