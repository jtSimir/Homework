"use strict";

class House {
   constructor (lenght, width, floors) {
      this.lenght = lenght,
      this.width = width,
      this.floors = floors
   }
   static sortBuyFloors (arr){
      arr.sort(function(a, b){
         if (a.floors>b.floors){
            return 1
         } else {
            return -1
         }
      })
   }
}

class Skyscaper extends House {
   constructor (lenght, width, floors, offices) {
      super(lenght, width, floors),
      this.offices = offices
   }
}

const firstHouse = new Skyscaper (25, 25, 25, 25)
const secondHouse = new Skyscaper (15, 15, 15, 15)
const thirdHouse = new Skyscaper (45, 45, 45, 45)
const fourHouse = new Skyscaper (55, 55, 55, 55)
const fiveHouse = new Skyscaper (115, 115, 115, 115)
const sixHouse = new Skyscaper (85, 85, 85, 85)
const sevenHouse = new Skyscaper (11, 11, 11, 11)

function arrHouse (...a) {
   let result = [];
   for (let i=0; i < arguments.length; i++){
      result.push(arguments[i]);
   }
   return result;
   
}

let forSortArrHouse = arrHouse(firstHouse, secondHouse, thirdHouse, fourHouse, fiveHouse, sixHouse, sevenHouse)

Skyscaper.sortBuyFloors(forSortArrHouse)
console.log(forSortArrHouse)