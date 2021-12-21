"use strict";

var users = [
  {id: 1, name: "Вася", age: 19},
  {id: 2, name: "Петя", age: 18},
  {id: 3, name: "Маша", age: 17},
  {id: 4, name: "Света", age: 18},
  {id: 5, name: "Наташа", age: 17},
  {id: 6, name: "Женя", age: 12},
  {id: 7, name: "Коля", age: 30},
  {id: 8, name: "Настя", age: 16},
  {id: 9, name: "Антон", age: 19},
  {id: 10, name: "Иван", age: 20},
  {id: 11, name: "Павел", age: 16},
  {id: 12, name: "Денис", age: 20}
  ];

  let usersAfterUniqueAge = users.filter(function(item, index, array){
    let k = 0;    
    for (let i = index; i < array.length; i++) {      
      if (array[i].age == item.age){        
        ++k;
      }
    }
    if (k == 1){ 
      return item
    }
  })

  console.log(usersAfterUniqueAge)