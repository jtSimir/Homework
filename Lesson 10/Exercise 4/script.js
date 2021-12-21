"use strict";

function counterClick () {
   let a = 0;
   return function (){
      a += 1
      console.log(a)
   }
}

let click = counterClick()

click()