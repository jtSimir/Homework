"use strict";

const files = ['text.docx', 
               'index.html', 
               'document.pdf', 
               'script.js', 
               'style.css', 
               'summary.pdf', 
               'Harry_Potter.pdf', 
               'report.pdf']

var arr1 = [];
var arr2 = [];

for (let i = 0; i < files.length; i++){
   arr1 = files[i].split('.');
      if (arr1.lastIndexOf('pdf') === 1){
         arr2.push(files[i])
      }
}











// function sum (a,b){
//    console.log(arguments[0], arguments[1], arguments)
//    return a+b;
// }


// const result = sum (1, 2, 3)


// function sum(a, b){
//    let result = 0;
//    for (let i=0; i < arguments.length; i++){
//       result +=arguments[i];
//    }
//    return result;
// }


//Стрелочная функция !!
// const sum = (a,b) => {
//    a *=5;
//    b*=2;   
//    return a + b; 
// }


// const sum1 = (a, b) => a+b; // Функция возвращает сумму а+b


// const sum = (...c) => {
//    let result = 0;

//    for (let i=0; i < c.length; i++){
//       result += c[i];
//    }

//    return result;
// };


// const res = sum(1, 2, 3, 4);



// const car = {
//    name: "BMW",
//    year: 1990,
//    presentCar: function (){
//       console.log("Pretty old BMW of 1990 year of production")
//    }
// }
// car.presentCar()


// const arr = [1, 2, 3, 4, 5, 6, 7];

// const lenght1 = arr.push(12) // Команда пуш ложит в конце массива число 12 и возвращает длину масива в переменную lenght1

// const lastElement = arr.pop(3); //ВlastElement вноситься поcледнее значение массива и длина уменьшается на 1 еденицу  

// const newLenght = arr.unshift(0); // В начале масива добовляет заданое значение и возвращает длину массива

// const firstElement = arr.shift(3); // firstElement вноситься первое значение массива и длина уменьшается на 1 еденицу


// const arr1 = [1, 2, 3, 4, 6]

// const arr2 = arr1.concat(9) // Передает значения arr1 в arr2



// const arr = [1, 2, 3];
// const arr1 = arr.concat();
// arr1.unshift(0);
// console.log (arr1)

// const arr2 = arr.concat(arr1)  // Объеденят arr и arr1 и передает данные в arr2. concat передает информацию списком ! (не масивом!!!) 

// const deleteArr2 = arr2.splice(2, 3); //2 - индекс элемента каторого хотим удалить, 3 - количество индексов хотим удалить и передача МАСИВА !! в deleteArr2 будут значения масива в индекса 2 3 4 

// arr2.splice(2, 3, 4, 5, 6) // 4, 5, 6 = указывает значения что вместо удаленного масива вставить при этом массив может расшириться либо сжаться

// arr2.splice(0, 3) // Если будет таткая запись то он удалит все элементы начиная с 3го индекса

// const newArr2 = arr2.slice(0, 2)  // в newArr2 вносит массив от arr2 начиная с индекса 0 и вносит 2 числа

// const sevenIndex = arr.indexOf(7) //Проверка существования элемента в массиве если есть то он возвращает индекс первого совпавшего если нет то возвращает -1

// arr.lastIndexOf(1)// Поиск 1 но с конца

// arr.forEach(function(el, i, arr) {
// console.log (`${el}, ${i} ${arr}`)
// }) // метод который применяет в качестве аргумента функцию

// arr.forEach(function(el, i, arr) {
//    arr[index] = element + index;
//    })


// arr.includes(1) // Ищет значение и возвращает тру либо фолс


// Пример работы .find
// const firstUser = {
//    firstName: "Ivan",
//    secondName: "Devision"
// }
// const user = user.find(function(user, index, array) {
//    return user.first_name === "Konev";
// })
// const user = user.findIndex(function(user, index, array) {
//    return user.first_name === "Konev";
// })

// поиск пользователя и запись в юзерКонев
// const userKonev = user.filter(function(user, index, array) {
//    return user.first_name === "Konev";
// }) 


// Пример поиска с использованием .filter
// const users =  [{name: "Ivan", age: 18}, 
//                {name: "Petr", age: 12}, 
//                {name: "Sidor", age: 25}, 
//                {name: "Pavel", age: 16}, 
//                {name: "Sasha", age: 29}];

// const userOld = users.filter(function(user, index, array) {
//    return user.age >= 18;
// })



// // Пример работы map 
// const usersOneYear = users.map(function(user, index, arr) {
//    return user.age += 1
// })
// // заносит в usersOneYear значения users.age +1


// //
// const numbers = [1, -2, 3, -5, 10, -20, 6, 7, 8, 10];

// const positiveNumbers = numbers.map(function(number) {
//    if (number < 0) {
//       number = number*-1
//    }
//    return number
// })


// arr.sort() // сортирует по первой цифре 


// // Одна из самых быстрых сортировок
// arr.sort(function(a, b){
//    if (a>b){
//       return 1
//    } else {
//       return -1
//    }
// })


// //Вариант замены "," на ";"
// var str = "Иван, Денис, Матвей, Павел"
// var usersStr = str.split(', ')
// const changeList = (string, oldSimbol, newJoinSimbol) => {
//    return string.split(oldSimbol).join(newJoinSimbol)
// } 
// const newStr = changeList(str, ", ", "; ")


// const arr = [1, 2, 3];

// // Суммирование всех элементов
// let sum = arr.reduce(function(start, element){
//    return start + element
//    console.log(start)
// }, 0)

// const arr = [1, -2, 3, 4, 5, -90, 10, 20, -89, 76];
// let sum = arr.reduce(function(start, element) {
//    if (element < 0) {
//       return start + element
//    } else {
//       return start
//    }
   
// }, 0)


// // const array = [1, 2, 3, 4, 5, 0, 1, 3, 0]
// // let b = array.indexOf(1)
// // console.log(b)
// // console.log(array[b])


// // for (let i = 0; i < 2; i++) {
// //    var a = array.indexOf(1);
// //    console.log(a)
// //    array[a] = 3;
// //    console.log(a)
// // }


// // function secondIndexOf(arr){
// //    let a = -1;
// //    for (let i = 0; i < 1; i++) {
// //       a = arr.indexOf(1);
// //       console.log(arr[a])
// //       arr[a] = 3;

// //       console.log(a)
// //    }
// // console.log(a)
// // }

// // secondIndexOf (array)