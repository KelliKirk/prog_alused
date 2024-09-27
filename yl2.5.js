const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage kirja suurus MB-des: ', suurus => {
  rl.question('Sisestage teema pealkiri (või jäta tühjaks): ', pealkiri => {
    rl.question('Kas kirjaga on kaasas fail (jah/ei)? ', manus => {
      
    
      let suurusNumber = suurus * 1;
      
    
      if (!pealkiri || (manus === 'jah' && suurusNumber > 1)) {
        console.log('Kiri on spamm');
      } else {
        console.log('Kiri ei ole spamm');
      }

      rl.close(); 
    });
  });
});
