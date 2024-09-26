const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage astme alus : ', astme_alus =>{
   let astendaja = 4  
let tulemus = astme_alus ** astendaja
console.log(tulemus)
rl.close
})



