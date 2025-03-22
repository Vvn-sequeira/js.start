// LOOPs


//FOr loops -----------------------------------------------------------------

// Print odd no . 
// for(let i=1 ;i<20 ; i=i+2)
// {
//         console.log(i);
// }


// Print even  no . 
// for(let i=2 ;i<20 ; i=i+2)
// {
//         console.log(i);
    
// }
// console.log("backwords")
// for(let i=20 ;i>=2 ; i=i-2)
// {
//         console.log(i);
    
// }

// Print multiplication table for 5
// for(let i=5 ; i<=50 ; i=i+5)
// {
//       console.log(i);
// }


// nested for loop's 

// for(let i=0 ; i<5 ;i++)
// {
//       console.log(`outer loop ${i}`);
//       for(let j=1 ; j<=5; j++)
//       {
//           console.log(j);
//       }
// }



// while loop ---------------------------------------
// let i = 0;
// while(i<5)
// {
//       console.log(i);
//       i++;
// }\

// Guess the movie ----------------------------------

// let movie = "KGF";

// let guess = prompt("Guess the movie if you can't then write Quit");

// while( guess != movie && guess != "Quit" )
// {
//      alert("wrong ans .. Try again");
//      guess = prompt("Guess the movie if you can't then write Quit");


// }
// if(guess == movie)
// {
//       alert("congrats");
// }
// else {
//      alert("well played");
// }


// Break 
// let i=0;
// while(i<5)
// {
//      console.log(i);
//      if(i == 3)
//      {
//           break;
//      }
//      i++;
// }


// Loop's ON array 
// let arr = ["vivian" ,"marcel " ,"sequeira"];

// for(let i =0 ;i<arr.length ; i++)
// {
//       console.log(i+1 , arr[i]);
// } 


let arr = [
    ['vivian' , 'marvel ' , 'sequeira'],
    ['helo' , 'hi ' , 'boom']
]


for(let i =0 ; i<arr.length ; i++)
{
      console.log(arr[i]);
      for(let j =0 ; j<arr[i].length ; j++)
      {
          console.log(` j=${j} , ${arr[i][j]}`);
      }
}