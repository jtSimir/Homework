"use strict";

let a = +prompt("Введите вораст");

// Вариант 1
if (a > 18){
   console.log (`Привет я уже старый и мне больше ${a} лет (метод if-else)`);
   } else if (a > 0) {
   console.log (`Привет мне ${a} лет (метод if-else)`);
   } else {
      console.log ("Неверно указан возраст (метод if-else)");
      }

// Вариант 2
let message =  a > 18 ? `Привет я уже старый и мне больше ${a} лет (метод с тернарным оператором)`:
               a > 0 ? `Привет мне ${a} лет (метод с тернарным оператором)`:  
               "Неверно указан возраст (метод с тернарным оператором)"
console.log (message);

// Вариант 3
switch (true){
   case a > 18: 
   console.log (`Привет я уже старый и мне больше ${a} лет (метод switch)`);
   break

   case a > 0: 
   console.log (`Привет мне ${a} лет (метод switch)`);
   break

   default: 
   console.log (`Неверно указан возраст (метод switch)`);
   break
   }


