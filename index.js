#! usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
// //computer will genrate rendom number
// //user input  for  guess number
// //compure user  input with computer genrated number show result
const randomnumber = Math.floor(Math.random() * 6 + 1);
console.log(randomnumber);
const answers = await inquirer_1.default.prompt([{
        name: "userguessnumber",
        type: "number",
        message: "please guess a number between 1-6: ",
    },
]);
if (answers.userguessnumber === randomnumber) {
    console.log("congragulation you guess right number ");
}
else {
    console.log("you guess wrong number");
}
