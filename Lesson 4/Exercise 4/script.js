"use strict";

let expectedColor = prompt("Выберите цвет");
let attemptNumber = +prompt("Количество попыток");

while (true) {
if (attemptNumber > 0){
   break;
} 
   attemptNumber = +prompt("Введите положетельное число кроме нуля");
}

let i = attemptNumber;

let color;
let result;

while (i > 0){
   
   color = prompt(`Какой цвет выбран ? (Осталось попыток ${i})`);   
   
   if (expectedColor == color) {
      alert("Вы угодали");
      break
   } else {
      alert("Вы не угодали") 
      --i;
   }
}

if (i == 0 ) {
   alert("Попытки закончились вы не угодали");
}