#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
//  store my balance first
let myBalance = 50000;
let myPin = 336699;
// print welcome message
console.log(chalk.blueBright("\n \t Welcome To My Package-ATM Machine \n"));
// question no 1
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow(" Enter your pin code. "),
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n \tCorrect pin code !!!"));
    // question no 2
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.magenta("\n \t Please select option \n"),
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        // question no 3
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk.cyan("\n \t Select a withdraw method: \n"),
                choices: ["Fast cash", "Enter amount"],
            },
        ]);
        if (withdrawAns.withdrawMethod === "Fast cash") {
            // question no 4
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: chalk.yellow("\n \t Select Amount \n"),
                    choices: [1000, 5000, 15000, 80000],
                },
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("\n \t Insufficient Balance \n"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdrawn successfully!`);
                console.log(chalk.green(`\n \t Your Remaining Balance is: ${myBalance} \n`));
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter amount") {
            // question no 5
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: " Enter The Amount To Withdraw:",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.red("\n \t Insufficient Balance \n"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(chalk.green(`\n \t ${amountAns.amount} withdrawn successfully \n`));
                console.log(chalk.green(`\n \t Your Remaining Balance is: ${myBalance} \n`));
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.green(`\n \t Your Account Balance is: ${myBalance} \n`));
    }
}
else {
    console.log(chalk.red("\n \t Pin is incorrect, Try Again! \n"));
}
