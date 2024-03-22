#! usr/bin/env node
import inquirer from "inquirer";
// //computer will genrate rendom number
// //user input  for  guess number
// //compure user  input with computer genrated number show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber);
export {};

 const answers = await inquirer.prompt([{
     name: "userguessnumber",
    type: "number",
    message: "please guess a number between 1-6: ",
},
]);
if (answers.userguessnumber===randomnumber){
    console.log("congragulation you guess right number ")
 } else{
    console.log("you guess wrong number")
    }
