"use strict";

let a = +prompt("Введите любое число кроме 0");

// Вариант 1
if (a > 0){
} else if (a < 0) {
} else {
console.log ("Неверно (метод if-else)");
}

// Вариант 2
let message =  a > 0 ? "" : 
               a < 0 ? "":
               "Неверно (метод с тернарным оператором)"
console.log (message);