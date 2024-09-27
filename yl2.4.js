const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
rl.question('Kas soovite istekoha ise valida või loosida? ' , istekoht => {
    if (istekoht == 'ise') {
    console.log('Te valisite istekoha ise.')
    console.log('Kas te soovite istuda akna ääres või mitte (muu)?')
    console.log('Valisite ise: aknakoht')
    console.log('Valisite ise: Vahekäigukoht')
    console.log('Valisite ise: Keskmine koht')
} else (istekoht == 'loos') {
    console.log('Istekoht loositakse: Aknakoht')
    console.log('Istekoht loositakse: Vahekäigukoht')
    console.log('Istekoht loositakse: Keskmine koht')
} 
console.log(`Istekoht loositi: ${Math.random(1)}   `)
})