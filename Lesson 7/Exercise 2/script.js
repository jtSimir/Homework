"use strict";

const arr1 = [1, 2, 3, 4, 5, -10, 6, 90, 23, -8];
const arr2 = [1, -2, 50, 9, -8, 15, 2];     
const arr3 = [1, 2, 3, 5, 19, -76, -67, 78];


// Function Declaration
function getNewArrFromGroup() {
  let newArr = [];
  let newArr2 = [];

   for (let i = 0; i < arguments.length; i++){
      newArr = newArr.concat(arguments[i]);        
   }

   for (let i = 0; i < newArr.length; i++){
      if (newArr[i] < 0 && newArr[i]%2 === 0){
         newArr2 = newArr2.concat(newArr[i])
      } 
   }    
   
   console.log(`newArr2Re = ${newArr2}`)
}

getNewArrFromGroup(arr1, arr2, arr3)