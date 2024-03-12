// Immediately Onvoked Function Expressions(IIFE) 
function neww (){
console.log('hello new');
}
neww();
//  name iife neww();
// ()() In first baracket we use for function and ther baracket for execution 
(function check (){
    console.log('check iife')
})(); 
// Arrow Function in iife 
 ( () => {
    console.log('arrow')
 })(); 
//  arrow iife 
//  if we add parantheses or any thing what we want 
((name) => {
    console.log(`welcome ${name}`)
})('harry')
// argument iife or parameter iife 