#!/usr/bin/env node

const fs = require('fs');
const lib = require('../dist/index');
const program = require('commander');

const pkg = JSON.parse(fs.readFileSync(__dirname + '/../package.json', 'utf8'));

program
  .version(pkg.version)
  .arguments('<text> [env]', 'Text to parse')
  .option('-i, --input [input]', 'Input file for parse')
  .option('-o, --output [output]', 'Output file for result')
  .option('--debug [output]', 'Debug the application')

let text = '';
program.action(cmd => {
  text = [cmd || text];
});

// Parse the args for the program
program.parse(process.argv);
let lines = [];

if (program.input) {
  text = fs.readFileSync(program.input, 'utf8').split('\n');
}

for (const line of text) {
  lines.push(line.split(' ').map(x => lib.splitWord(x)).join(' '));
}

if (program.output) {
  fs.writeFileSync(program.output, lines.join('\n'), 'utf8');
} else {
  console.log(lines.join('\n'));
}