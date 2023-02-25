const fs = require("fs");
const net = require("net");
const readline = require('readline-sync');
const config = require('./config.json');

let subgamesObject = {
    "crackityhack": require("./subgames/crackityhack.js"),
};
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const port = config.port;
const host = config.ip;
const conn = net.createConnection(port, host);
conn.setEncoding("utf-8"); // sends all commands as utf-8 (same as .encode())
conn.write("detachController \r\n"); // detach from console

let allowedSubgames = Object.keys(subgamesObject);
let fourDifficultySubgames = [];
let maxDifficulty = 3; // Some subgames have 4 difficulty settings
let subgameInput = readline.question(`Which subgame do you want to play?\nOptions: ${allowedSubgames.join(", ")}\n`);
if (!allowedSubgames.includes(subgameInput)) return console.log("That subgame isn't available (yet)!");
if (fourDifficultySubgames.includes(subgameInput)) maxDifficulty = 4;
let difficultyInput = readline.question(`What difficulty do you want to play?\nOptions: 1-${maxDifficulty}\n`);
if (isNaN(difficultyInput)) return console.log("Difficulty has to be a number!");
if (difficultyInput < 1 || difficultyInput > maxDifficulty) return console.log("That difficulty isn't available for that subgame!");

conn.write("click A \r\n");
conn.write("click A \r\n");
console.log("Connected controller to console.");

return subgamesObject[subgameInput].run({ conn: conn, sleep: sleep, difficulty: difficultyInput });