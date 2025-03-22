/* 
---Primitive 

7 types :
        string , Number , boolean ,  null , Undefined , Symbol , BigInt 
        


---Reference (NOn Primitive)
type: 
     Array, objects , Functions 

*/  


// Primitive
const name = "vivian"
const id = 1212
const anotherID = Symbol('1212@')
const BIGINT = 12121323232323n
const no = 1 
const boolean = true



// non Primitive 

const heros = ["Shaktiman" , "naagaraj" , "doga"]

let obj = {
     name: "vivian",
     age  : 22,  
}

const myfinction = function() {
     console.log("hello world")

}

console.log(typeof obj)
