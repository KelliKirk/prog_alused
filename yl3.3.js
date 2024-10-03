
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question ('Sisesta täringute arv: ' , täringuteArv => {
    for (let vise = 1; vise <= täringuteArv; vise++) {
        console.log(`Täringute arv:${Math.ceil(Math.random()*6)}`)
    } 
    rl.close()
}  )
