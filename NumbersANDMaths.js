// const score = 400 ;
// const  balance = new Number(100)
// console.log(balance)  //=> Numbers: 100

// console.log(balance.toString())   //  100 
// console.log(balance.toFixed(2))  // => 100.00

// const otherNO = 12333.134;

// console.log(otherNO.toPrecision(4)) // when the no is 12.1 and the precision is 2 the outPUT will be 12 .. when the no is 12.122 and  the precision is 3 the outPUT will be 12.1 .... wehn the no is 121212.1 and the precision is 3 the outPUT will be in exponential value ...


// const no1 = 1000000;
// console.log(no1.toLocaleString('en-IN'))


// ***************************** Maths **************************************** 

const no = 4;
// console.log(Math)
// console.log(Math.abs(-no))
// console.log(Math.round(4.2)) // => 4
// console.log(Math.ceil(4.6))  // => 5  (ceiling)
// console.log(Math.floor(4.6))  // => 4  (floor)
// console.log(Math.sqrt(25))  // =>  5 
// console.log(Math.min(25,3,45,3))  // =>  3

console.log(Math.random()) // inbetweeen 0 to 1 (mostly decimal )
console.log(Math.floor(Math.random()*10) +1)  


const  min =10 ;
const max = 20 ;

console.log(Math.floor( ( Math.random() * (max - min + 1) )  + min ) ) // math.floor to round up  the value to lowest point of the no .. Math.random to provide randomo no between 0 to 1 .. so we need no between 10 20 so we substract 20 - 10 and to avoid 0's we add 1 to it and multipiled that value with random  ...  now the random value genrate 1 to max value to get value from min to max we add min value to the caluclated random ...

