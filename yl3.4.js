const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let õun = 14
let pöialpoiss = 6

rl.question('Mitu pöialpoissi tahab õuna? ' , poiss => {

    for (poiss = 1; poiss <= pöialpoiss; poiss++) {
        console.log(poiss + ' . pöialpoiss')
        let õunadPoisile = Math.ceil(Math.random() * 2)
        console.log(õunadPoisile)
            õunad = õun - õunadPoisile
            console.log('on jäänud ' + õunad + 'õunu')
            console.log('------------')
        
    } 
    console.log('Lumivalgekesele on jäänud ' + õunad + 'õunu')
    rl.close()
} )