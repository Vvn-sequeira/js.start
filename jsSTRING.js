//Modern syntax 

// " " and ' ' is same in js 

let name = "vivian"
let age = 32

// console.log(name + age + "hello")


console.log(`hello my name is ${name} and my age is ${age} `)


const Name = new String('vivian-fc');
console.log(Name);

console.log(Name[2]);
console.log(Name.length)
console.log(Name.toUpperCase()) 
console.log(Name.charAt(1)) 
console.log(Name.indexOf('v')) 
const newName = Name.substring(0 , 6)
console.log(newName)
const anothername = newName.slice(0 , 3)
console.log("vvvvvvvvvvvvvvvvvvvvvv")
console.log(anothername)
const friend = "              marcel       ";
console.log(friend);
console.log(friend.trim())
const url = 'https://vivian.com/hello%20sequeira'
console.log(url.replace('%20' , '-'))
console.log( url.includes('https'))
console.log(Name.split('-'));
