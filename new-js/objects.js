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
    email : "haris99@gmail.com",
    location : "Isl" ,
    isloggedIn : false,
    lastLoginDays : ["Monday" , "Sudnay"]
 }
 console.log(jsUser.email)
 console.log(jsUser["email"])
 console.log([jsUser[ "full name"] )
 console.log([jsUser[ "full name"] )


 