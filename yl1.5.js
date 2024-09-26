const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question ('Sisestage ainepunktide arv: ', ainepunkt => {

} )
let ainepunkt = 26
let kolm_ainepunkti = ainepunkt *3
let nadal = kolm_ainepunkti / 10
rl.question ('Sisestage nädalate arv: ', nadal => {

} )
console.log = (ainepunkt, nadal)
rl.close()
