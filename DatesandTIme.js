 // Dates and time 

 //Dates 

 let MYdate = new Date()

//  console.log(MYdate) // 2025-02-25T08:08:17.224Z
//  console.log(MYdate.toString()) // Tue Feb 25 2025 13:39:06 GMT+0530 (India Standard Time)

//  console.log(MYdate.toDateString()) //Tue Feb 25 2025 
//  console.log(MYdate.toLocaleDateString()) //2/25/2025
//  console.log(typeof MYdate) //object 


 let newdate = new Date(2023 , 0 , 23)  // month start from 0 in js
//  console.log(newdate.toDateString())  //Mon Jan 23 2023 

 
 let datewithtime = new Date(2023 , 0 , 23 , 5 , 30) // year/month/day/hour / min 
//  console.log(datewithtime.toLocaleString()) // 1/23/2023, 5:30:00 AM  

let ddmmyy = new Date("2023-06-02") 
// console.log(ddmmyy.toLocaleString()) //6/2/2023, 5:30:00 AM   

let datenow =  Date.now()
// console.log(datenow) //1740471473392
// console.log(newdate.getTime()) //1674412200000 

// console.log( Math.floor(datenow / 1000)) //1740471676 in sec  


let NEwdate = new Date()
// console.log(NEwdate)
// console.log(NEwdate.getMonth()+1)
// console.log(NEwdate.getDay())

 console.log( NEwdate.toLocaleString('default' , {
    weekday : "short"
    weekday : "short" // tue 

}) )