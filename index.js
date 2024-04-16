#!/usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// declare constant "answers" and asign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([{
        name: "sentences",
        type: "Input",
        message: chalk.bgCyanBright("Ener your sentence to count the letters !")
    }]);
const words = answers.sentences.trim().split(" "); // split say array banayega aur split spaces bhee uthnay he count krayga
// print the array of words to the console
console.log(words);
// print the word count of the sentences to the console
console.log(`Your sentence word count is ${words.length}`);
