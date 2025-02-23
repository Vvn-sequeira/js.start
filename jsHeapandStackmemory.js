// stack (primitive)   ,, heap (non Primitive)


let name ="vivian"
let anotherNamer = name 

console.log(anotherNamer)
console.log(name)


let userONe = {
      email : "vivian@gmail.com",
      id : 1212

}

console.log(userONe)


let userTwo = userONe ;
userTwo.email = "vivian"
console.log(userTwo)


console.log(userONe)
