"use strict";

const users = [{name: 'Ivan', age: 18}, 
               {name: 'Petr', age: 12}, 
               {name: 'Sidor', age: 25}, 
               {name: 'Pavel', age: 16}, 
               {name: 'Sasha', age: 29}]

function divUsers (user){
   user.reduce(function(prev, item) {
         const divAdd = `<div class="alert">Имя: ${item.name}, возраст: ${item.age}</div>`
         document.body.insertAdjacentHTML ('beforeend', divAdd)
   })
}

divUsers(users)
