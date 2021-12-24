"use strict";

function HouseBuilder (width, lenght, floor) {
  this.width = width,
  this.lenght = lenght,
  this.floor = floor,
  console.log(`${floor} этажный дом с шириной: ${width} м, длиной: ${lenght} м`)
}

const firstHouse = new HouseBuilder(35, 40, 2)
const secondHouse = new HouseBuilder(30, 45, 3)


HouseBuilder.prototype.calcArea = function () {
  const {width, lenght, floor} = this;
  let totalArea = width * lenght * floor;
  console.log(`площадь всех этажей в доме составляет: ${totalArea} м2`)
  return totalArea 

}

firstHouse.calcArea()
secondHouse.calcArea()