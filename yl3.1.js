const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage mitu korda äratada: ' , äratamisKord => {
    for (let kord = 1; kord <= äratamisKord; kord++) {
  } 
console.log('Tõuse ja sära!')
rl.close()
} )