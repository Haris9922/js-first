// { } mean scope 
// if we write the in {} its mean block scope then we write code outside the block its mean global scope
let a = 10;
var b = 20;
const c = 30;
if (true){
    let a = 40;
var b = 50;
const c = 60;
}

console.log(a)
console.log(b)
// var is not suitable for everytime 
console.log(c)
