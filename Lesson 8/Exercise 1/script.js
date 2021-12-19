"use strict";

const user = [{name: "Ivan", age: 18},
               {name: "Petr", age: 12},
               {name: "Sidor", age: 25},
               {name: "Pavel", age: 16},
               {name: "Sasha", age: 29}]
               

user.sort(function(a, b){
   if (a.age > b.age){
      return 1
   } else {
      return -1
   }
})

let sumYoung = user.reduce(function(start, element) {
   if (element.age < 18){
       return start + element.age
   }   else {
      return start
   }
}, 0)