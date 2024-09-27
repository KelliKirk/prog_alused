const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Kas soovite istekoha ise valida või loosida? ', istekoht => {
    if (istekoht === 'ise') {
        rl.question('Kas te soovite istuda akna ääres (aken) või mujal (muu)? ', valik => {
            if (valik === 'aken') {
                console.log('Valisite ise: aknakoht');
            } else if (valik === 'muu') {
                console.log('Valisite ise: vahekäigukoht');
            } else {
                console.log('Vale sisend!');
            }
            rl.close();
        });
    } else if (istekoht === 'loos') {

        let loos = Math.random(); 
        if (loos < 1/3) {
            console.log('Istekoht loositi: aknakoht');
        } else {
            console.log('Istekoht loositi: vahekäigukoht');
        }
        rl.close();
    } else {
        console.log('Vale sisend! Palun sisestage "ise" või "loos".');
        rl.close();
    }
});
