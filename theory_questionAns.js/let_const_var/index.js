/*
var is function-scoped and can be redeclared, making it less predictable. It is also hoisted.
let is block-scoped, can be reassigned, and is not hoisted.
const is also block-scoped but cannot be reassigned after declaration. It does not mean the value it holds is immutable, only that the variable identifier cannot be reassigned.
*/


var a = 20;
let b = 23;
let c = 50;
let d;
// e = 0;
// console.log(a,b,c);
// var c = 25;
console.table([a, b, c, d ,e]);



// let b = 32
// const c = 60;
