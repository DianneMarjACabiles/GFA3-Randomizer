// script.js
var num1 = Math.random() * 100;
var num2 = Math.random() * 100;
var num3 = Math.random() * 100;  

var biggest = Math.max(num1, Math.max(num2, num3)); 
var Biggest = parseInt(biggest); 
document.write("The largest amount of akumatizations in one week as of now is " + Biggest + "<br>");

var letterIndex = parseInt(num1) % 26;  
var letter = String.fromCharCode('A'.charCodeAt(0) + letterIndex - 1); 

document.write("The first letter of the latest akumatized villain is " + letter + "<br>");

var totalMinutes = Math.floor(num2 * num3); 
var hours = Math.floor(totalMinutes / 60);
var minutes = totalMinutes % 60;
document.write("How long it took to defeat the latest villain: " + hours + " hours and " + minutes + " minutes");
