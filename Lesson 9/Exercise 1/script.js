// "use strict";

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
var arrUnique = [];

arr.reduce(function(start, element, index, array){
   if (array.indexOf(element) === index){
      arrUnique.push(element)
   }

}, 0);