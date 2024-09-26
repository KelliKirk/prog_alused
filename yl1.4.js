const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question ('Sisestage oma nimi: ', nimi => { 

rl.question ('Sisestage lubatud kiirus: ', lubatud => {
rl.question ('Tegelik kiirus: ', tegelik => { 
   
let väärtus = tegelik - lubatud * 3
console.log = (`${nimi}, kiiruse ületamise eest on teie trahv ${väärtus} eurot.`)
rl.close()
 }) 
  })
    })
