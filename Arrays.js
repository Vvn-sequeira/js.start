// Arrays 

// const arr = [1,2,3,3,4,5,5,6 ,"vivian"] // data can be mixed datatypes .. Shallow copy 
// const heros = ["vivina " , "marcel "]

// console.log(arr.length)

// const myarray =  new Array(1,2,3,3,4,5); 

// Array methods 

// myarray.push(0) // push back 
// myarray.push(99)
// myarray.pop(99) // pop from back

// myarray.unshift(8)  // insert at the front 
// myarray.shift(8) // pop from front 


// console.log(myarray.includes(1)) // searching 
// console.log(myarray.indexOf(3 )) // provide the index of the  give no .. if its not present then it returns -1 

// const newarr = myarray.join()
// console.log(myarray) 
// console.log(typeof newarr)  // string 
// console.log(newarr) // ele in the string form 


// Slice , Splice 

// console.log("A ", myarray)
// const A =  myarray.slice(0 , 3)
// console.log(A)
// console.log("B " , myarray) // the original arrya will not be effected 


// console.log("A ", myarray) 
// const A =  myarray.splice(0 , 3)
// console.log(A)
// console.log("B " , myarray) // the orginal array will be effected 


// let students = new Array('vivian','marcel','sequeira');
// console.log(students);
// console.log(students[0]);


// type of array--------------------------------------
// console.log(typeof(students));  // objedt

// type's of array--------------------------
// let student = ['vivian','marcel','sequeira'];
// let vivian = ['vivian',24150124,'A'];
// let no_  = [1,2,34,3];
// let empty = []; 


// Accessing array ele's-------------------------------
// let students = new Array('vivian','marcel','sequeira'); 
// console.log(students[1]);  // marcel
// console.log(students[1][0]);  // m
 
// Array methods ------------------------------

// let NUMbers = [1,2,3,4,54];
// console.log(NUMbers);

// // PUsh: (insert from back)---------
// NUMbers.push(12);
// NUMbers.push(92);
// console.log(NUMbers);

// // Pop: (delete from back)------------
// NUMbers.pop();
// NUMbers.pop();
// console.log(NUMbers);

// // UNshift (insert from the front )--------------
// NUMbers.unshift("Front");
// console.log(NUMbers); 

// // shift (delete from the front )-------------
// NUMbers.shift();
// console.log(NUMbers); 

// index of --------------
// let students = new Array('vivian','marcel','sequeira'); 
// console.log(students.indexOf("sequeira")); //2 

// // includes ( if present returns TRUE else returns FALSE)---------
// console.log(students.includes("vivian")); // true
// console.log(students.includes("vian"));  //false

// concatination---------------
// let student = ['vivian','marcel','sequeira'];
// let arr = [1,2,3,3,4,5,5,6 ,"vivian"];
// console.log(arr.concat(student)); 

// reverse -----------------
// let arr = [1,2,3,3,4,5,5,6 ,"vivian"]; 
// console.log(arr.reverse()); 

//Slice ---------------(copies of an Portion )
// let arr = [1,2,3,3,4,5,5,6 ,"vivian"]; 
// console.log(arr.slice()); // copy of original array 
// console.log(arr.slice(2));
// console.log(arr.slice(0,3)); 

// Splice -----------------------
// (removes , replace , add elements) 
// (changes in original array) 
// let student = ['vivian','marcel','sequeira'];
// console.log(student.splice(2));
// student.splice(0,2,"hereo ","hello ")
// console.log(student);

// Sort------------------
// (NOTE: this f() sort the array in the basis of string so if no is present then it will convert it into string and then proceede with the sorting based on the cahracter)
// let student = ['vivian','marcel','sequeira'];
// console.log(student.sort());


// PRactice q ***************
// let start = ['january','july','march','agust'];
// console.log(start);
// start.splice(0,2,'july','june');
// console.log(start);

// console.log(start.reverse().indexOf('agust'));


// NESTED ARRAY --------------------------------------------------------

// let arr = [ [2,3] , [3.5] , [6,7]];
// console.log(arr);

// console.log(arr[0][0]);



