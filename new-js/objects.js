 //singleton

 //object literals
//  objectconstuctor
 Object.create  
//  objectconstuctor
// if we use symbol 
const mySym = Symbol("key1")

 const jsUser = {
    name :"Harry",
    "full name" : "Haris",
    age : 24,
    [mySym] : "mykey1", 
   //  if we use symbol then we use this syntax
    email : "haris99@gmail.com",
    location : "Isl" ,
    isloggedIn : false,
    lastLoginDays : ["Monday" , "Sudnay"]
 }
 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log(jsUser["full name"])
 console.log(jsUser[mySym])

// if change any value then use"="

 jsUser.email = "abc2gmail.com"
 console.log(jsUser)
 // if freeze  any value then use first call object then value
//  Object.freeze(jsUser)

// adding function in objects 
jsUser.greeting = function(){
   console.log("Hello everyone");
}
console.log(jsUser.greeting());
// Adding any items for calling this method 
jsUser.greetingTwo = function(){
   console.log(`hello ,${this.name}`);
}
console.log(jsUser.greetingTwo());