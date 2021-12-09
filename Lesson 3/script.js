"use strict";

const user = {
   name: "Сергей",
   surname: "Семерич",
   age: 28, 
   city: "Минск", 
   isDriver: true
}

let isDriverText = "";

if (user.isDriver == true)  {
   isDriverText = "Я вожу автомобиль.";
} else {
   isDriverText = "Я езжу общественным транспортом.";
}

      
var textMessage = `Привет меня зовут ${user.name} ${user.surname}, мне ${user.age} лет, я живу в городе ${user.city}. ${isDriverText}`;

console.log(textMessage);
alert(textMessage);


