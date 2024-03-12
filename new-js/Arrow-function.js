// this keyword is use for current contest
const user = {
    username: "Harry",
    price : 99,
    welcomeMesasge: function(){
        console.log(`${this.username} , Welcome to website`);


    }
}
user.welcomeMesasge()
// if we add new user name this will assign new name of user
user.username="Ali"
user.welcomeMesasge()
// in node js the this {} keyword is empty baracket

function chai(){
    let username = "Ahmed"
    console.log(this.username);
}
chai()
// in function this keyword is not work properly 
 const chaii =() => {
    let userr = "Noman"
    console.log(this.userr)
 }
 chaii()

//  Arrow Function 
// ()=>{}
 const addTwo = (num1, num2) => {
    return num1 + num2
 }
 console.log(addTwo(5 , 6))

//  if we add this {} baracket in fuction then we use return statment then if we use () this baracket then we dont need return statment 
const addTwoo = (num1, num2) => (num1 + num2)
 console.log(addTwoo(5 , 6))