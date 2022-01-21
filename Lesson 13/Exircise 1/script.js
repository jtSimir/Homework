"use strict";

const firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const string = 'Пробуем перевернуть текст'

function invert (data) {
   let a = []
   let b = ''
   if (Array.isArray(data)){
      for (let i = 0, j = data.length-1; i < data.length/2; i++, j--) {
         a[i] = data[j]  
         a[j] = data[i]    
      }
      console.log(a)
   }
   else {
      a = data.split('')
      for (let i = 0, j = data.length-1; i < data.length/2; i++, j--) {
         a[i] = data[j]  
         a[j] = data[i]    
      }
      b = a.join('')
      console.log(b)
   }
}

invert(firstArr)
invert(string)
