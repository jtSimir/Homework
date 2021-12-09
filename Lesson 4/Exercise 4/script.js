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

color = prompt(`Какой цвет выбран ? (Осталось попыток ${i})`);

while (i > 1 && expectedColor !== color){
   --i;
   alert("Вы не угодали") 
   color = prompt(`Какой цвет выбран ? (Осталось попыток ${i})`);    
}

if (i > 1 ) {
   result = "Вы угодали";
} else {
   result = "Попытки закончились вы не угодали";
}

alert(result)
