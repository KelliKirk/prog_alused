const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta ringide arv: ', ring => {
  let summa = 0;
  for (let ring = 1; ring <= 6; ring++) {
    if (ring % 2 == 0) {
        summa = summa + ring;
        
    } 
  }
  rl.question('Porgandite koguarv: ' , porgand => {
  } )
  console.log(`Porgandite koguarv on ${summa}` )
  rl.close()
});