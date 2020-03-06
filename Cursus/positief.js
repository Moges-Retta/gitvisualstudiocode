const prompt = require("prompt-sync")();
//'use strict';
/*let geld=Number(prompt('Hoeveel stort je?'));
let totaal=0;
while (geld!==0){
    totaal+=geld;
    console.log(totaal);
    geld=Number(prompt('Hoeveel stort je?'));
}
console.log('endopbrengst:',totaal)*/
let prijs=3;
let aantal=Number(prompt('Hoeveel lemonades?'));
let totaal=0;
while (aantal<=0){
    aantal=Number(prompt('Hoeveel lemonades??'));
}
bedrag=prijs*aantal;
console.log('total bedrag:',bedrag,'€')