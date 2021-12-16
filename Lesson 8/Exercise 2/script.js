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
      if (arr1.lastIndexOf('pdf') === arr1.length-1){
         arr2.push(files[i])
      }
}

console.log(arr2)