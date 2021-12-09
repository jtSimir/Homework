"use strict";

const user = {
   name: "",
   surname: "",
   age: "", 
   city: "", 
   isDriver: ""
}

user.name = prompt("Введиет имя");
user.surname = prompt("Введиет Фамилию");
user.age = prompt("Введиет ваш возраст");
user.city = prompt("Введиет где вы проживаете");
user.isDriver = confirm("Введиет есть ли у вас водительское удостоверение");

let isDriverText;

   if (user.isDriver == true)  {
      isDriverText = "Я вожу автомобиль.";
   } else {
      isDriverText = "Я езжу общественным транспортом.";
   }

      
var textMessage = `Привет меня зовут ${user.name} ${user.surname}, мне ${user.age} лет, я живу в городе ${user.city}. ${isDriverText}`;

console.log(textMessage);
alert(textMessage);


