// Arrays 

const arr = [1,2,3,3,4,5,5,6 ,"vivian"] // data can be mixed datatypes .. Shallow copy 
const heros = ["vivina " , "marcel "]

// console.log(arr.length)

const myarray =  new Array(1,2,3,3,4,5); 

// Array methods 

// myarray.push(0) // push back 
// myarray.push(99)
// myarray.pop(99) // pop from back

// myarray.unshift(8)  // insert at the front 
// myarray.shift(8) // pop from front 


// console.log(myarray.includes(1)) // searching 
// console.log(myarray.indexOf(3 )) // provide the index of the  give no .. if its not present then it returns -1 

const newarr = myarray.join()
// console.log(myarray) 
// console.log(typeof newarr)  // string 
// console.log(newarr) // ele in the string form 


// Slice , Splice 

// console.log("A ", myarray)
// const A =  myarray.slice(0 , 3)
// console.log(A)
// console.log("B " , myarray) // the original arrya will not be effected 


console.log("A ", myarray) 
const A =  myarray.splice(0 , 3)
console.log(A)
console.log("B " , myarray) // the orginal array will be effected 