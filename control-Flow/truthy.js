  const userEmail = "haris@gmail.com"
   if (userEmail){
    console.log("got user email")
   } else {
    console.log("dont't have user email")
   }

//    fasly value
// false, 0 , -0,BigInt 0n, "" , null, undefined, NaN 
// Truthy value 
//"0" ,"false" , " " , [] , {} , function(){}

if (userEmail.length === 0){
    console.log("Empty array")
}
//Nullish Coalescing Operator (??):null underdefined
let val1;
// val1 = 5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 10
 val1 = null ?? 10 ?? 20


console.log(val1)

 //terniary operator
//  condition ? true : false

const iceprice = 1000
iceprice >= 80 ? console.log("price is 1000") : console.log("less than 1000")