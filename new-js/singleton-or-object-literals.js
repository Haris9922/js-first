// single object may be 
// const tinderUser = new Object() 
const tinderUser = {}
tinderUser.id = "a@gmail/com"
tinderUser.name = "Heoo"

// adding object inside object 
const jsUer1 = {
    email: "some@gamil.com",
    fullname:{
        userfullname:{
            full:"har",
            last:"ris"
        }
    }
}  
// console.log(jsUer1.fullname);

// mergin objects 
const objt_1 = {1 : "A",2 : "B" }
const objt_2 = {3 : "c",4 : "d" }
const objt_3 = {5 : "e",6 : "f" }

console.log( objt_1 , objt_2 , objt_3) 
// if we merg then this methid can be use 
// const obj_res = Object.assign({} , objt_1 , objt_2 , objt_3)
// if we merg all then we use spread(...) 
const obj_res = {...objt_1 , ...objt_2 , ...objt_3}

console.log(obj_res)

// object destructor 

const course = {
    cousrse_name : "javaScript",
    price : "150ruppee",
    courdeInstructor:"pataNi"
}
// if we use same object in many times then we use 

// course.courdeInstructor

// best usage 
// Example const {what you display} = object name where you pick object value 
const {price} = course
// more example if the word is big then use own word 
const{price : pri} = course
console.log(price);
console.log(pri);