"use strict";

function User (first_name, second_name, age, city){
   this.first_name = first_name
   this.second_name = second_name
   this.age = age
   this.city = city
}

const user_1 = new User ("Иван", "Иванович", 19, "Минск")
const user_2 = new User ("Петр", "Петрович", 21, "Брест")