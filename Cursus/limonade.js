const prompt = require("prompt-sync")();
'use strict';
let prijs=3;
const aantal=Number(prompt('Hoeveel limonades?'));
bedrag=prijs*aantal;
if (aantal>10){
    bedrag=0.95*bedrag;
}
console.log('total is €')
console.log(bedrag)
