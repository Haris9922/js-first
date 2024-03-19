// for of loop 
// ["" , "" ,""]string 
// [{},{},{}]object 

const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val);
}
// maps 

// for in not understand 

// for each 
const coding = ["js" , "ruby"]
coding.forEach(function(val){
    console.log(val);
})
const myObject = [{
    languageName:  "java script",
    language:  "java script",
},
{
    languageName:  "java",
    language:  "java",
},
{
    languageName:"c++",
    language:"c plus plus"
}
]
myObject.forEach((items)=>{
console.log(items.languageName + items.language );
})