const fs = require("fs");
const net = require("net");
const readline = require('readline-sync');
const config = require('./config.json');

let allowedSubgames = ["crackityhack", "eggcatcher", "samuraikirby"];
let subgameInput = readline.question(`Which subgame do you want to play?\nOptions: ${allowedSubgames.join(", ")}\n`);
if (!allowedSubgames.includes(subgameInput)) return console.log("That subgame isn't available (yet)!");
let difficultyInput = readline.question("What difficulty do you want to play?\nOptions: 1, 2, 3\n");

const port = config.port;
const host = config.ip;
const conn = net.createConnection(port, host);
conn.setEncoding("utf-8"); // sends all commands as utf-8 (same as .encode())

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
