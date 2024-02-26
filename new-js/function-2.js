// rest operator  (...) if user add multiple value then we add this but its returns in array

function calculateValue(...num1){
    return   num1
} 
console.log(calculateValue(200,500,800,1000))

// another example
// function calculateValue(val1, val2, ...num1){
//     return   num1
// } 
// console.log(calculateValue(200,500,800,1000))
// its mean rest operator show only rest value 

// using objects in function 
const user = {
    userName:"Harry",
    price : "150"
}
function handleFunction(anyobject){
    console.log(`user name is ${anyobject.userName} and price is ${anyobject.price}`);
}
console.log(handleFunction(user))

// using array in function 
const myNewArray = [100, 200, 300, 400]

function returnNewArray(getarray){
    return getarray
}
console.log(returnNewArray(myNewArray))