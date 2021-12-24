"use strict";

function HouseBuilder (width, lenght, floor) {
  this.width = width,
  this.lenght = lenght,
  this.floor = floor,
  console.log(`${floor} этажный дом с шириной: ${width} м, длиной: ${lenght} м`)
}

const firstHouse = new HouseBuilder(35, 40, 2)
const secondHouse = new HouseBuilder(35, 40, 2)