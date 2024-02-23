//  function syntax 
function myName(){
    console.log("h");
    console.log("ha");
    console.log("har");
    console.log("hari");
    console.log("haris");
}
myName()

// 1st way 
function addTwoNumber(num1, num2){
    console.log(num1 + num2)
}
addTwoNumber(3,15)

// way 2nd 
function addTwoNumber(num1, num2){
    let result = num1 + num2 
    return result
}
 const result = addTwoNumber(3,15)
 console.log("result:" ,  result)

//  way 3rd
function addTwoNumber(num1, num2){

    return num1 + num2
}
 const results = addTwoNumber(3,15)
 console.log("result:" ,  results)

//  by using string method 
function LoginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just login`
}
// console.log(LoginUserMessage("aye"))
console.log(LoginUserMessage())

// if we assign by default value just add parameters unername = "any value"
