const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisesta ohutemperatuur: ", temperatuur => { 
    if (temperatuur < 4.0) { 
    console.log('On jaatumise oht')
    } else { 
        console.log('Ei ole jaatumise ohtu')
      }  
    rl.close()
  })


