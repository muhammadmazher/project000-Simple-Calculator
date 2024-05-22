#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const answer = await inquirer.prompt ([
    {messege: "Enter your first number", type: "number", name: "firstNumber"},
    {message: "Enter your second number", type: "number", name: "secondNumber"},
    {
        message: "Select one of the Operator to perform operation", type: "list", name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]); 
// conditional statement
if (answer.Operator === "Addition") {console.log("Your Value is:" +" "+ (answer.firstNumber+answer.secondNumber))

} else if (answer.Operator === "Subtraction") {console.log("Your Value is:" +" "+ (answer.firstNumber-answer.secondNumber))

} else if (answer.Operator === "Multiplication") {console.log("Your Value is:" +" "+ (answer.firstNumber*answer.secondNumber))

} else if (answer.Operator === "Division") {console.log("Your Value is" +" "+ (answer.firstNumber/answer.secondNumber))
} else {console.log("Select valid operator")};