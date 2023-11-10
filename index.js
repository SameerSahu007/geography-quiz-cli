#!usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from 'gradient-string';
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createPromptModule } from "inquirer";
import {getallCountries} from './utils/country.js'

let game_name;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('Welcome to Geography Quiz \n')
  await sleep()
  rainbowTitle.stop();
}

async function chooseGame() {
  const answers = await inquirer.prompt({
    name: 'name',
    type: 'list',
    message: 'Which game you want to play? \n',
    choices: [
      'Guess the countries starting with a specific letter',
      'Name n number of countries',
      'Name capitals of differenct countries',
      'Name curriences of different countries'
    ],
  });
  return handleAnswers(answers.name);
}

function handleAnswers(answers) {
  switch (answers) {
    case 'Guess the countries starting with a specific letter':
      gameOne();
      break;

    case 'Name n number of countries':
      console.log(2)
      break;

    case 'Name capitals of differenct countries':
      console.log(3)
      break;

    case 'Name curriences of different countries':
      console.log(4)
      break;

    default:
      console.log('not a valid option')
  }
}

async function gameOne() {
  let countryCount = 0, strike = 0;
  let country_lst = getallCountries()
  async function askCount(){
    const answers = await inquirer.prompt({
      name : 'count',
      type : 'input',
      message: 'How many countries can you name?',
      default() {
        return 0;
      },
    });
    countryCount = answers.count
  }
  await askCount()
  
  console.log(typeof countryCount, countryCount, country_lst.length)

  if(countryCount <= 0 || countryCount > country_lst.length){
    console.log(chalk.red(`\n You cant choose a number less than 0 or greater than ${country_lst.len}`));
    return;
  }
  console.log(chalk.bgWhite.bold(`\n lets start you have to name ${countryCount} countries
  you can choose three wrong chances `))

  
}


await welcome()
await chooseGame()