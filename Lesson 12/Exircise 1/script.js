"use strict";

class User {
   constructor (first_name, second_name, age, city) {
   this.first_name = first_name,
   this.second_name = second_name,
   this.age = age,
   this.city = city
   }
}

function info() {
   console.log(`ИМЯ: ${this.first_name}, ФАМИЛИЯ: ${this.second_name}, ВОЗРАСТ: ${this.age}, ГОРОД: ${this.city}`)
}

const firstUser = new User ('Сергей', 'Семерич', '29', 'Минск')
const secondUser = new User ('Александр', 'Семерич', '31', 'Минск')

info.call(firstUser)
info.call(secondUser)