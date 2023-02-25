const readline = require('readline-sync');
const config = require('./config.json');

let subgameInput = readline.question("Which subgame do you want to play?\nOptions: \"crackityhack\", \"eggcatcher\", \"samuraikirby\"\n");
let difficultyInput = readline.question("What difficulty do you want to play?\nOptions: 1, 2, 3\n");