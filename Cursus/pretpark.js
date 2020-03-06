const prompt = require("prompt-sync")();
let Leeftijd=Number(prompt('Leeftijd (tussen 0 en 8)'));
let aantalKinderen=0;
let aantalVolwassen=0;
while(Leeftijd!=0){
    if(Leeftijd<=18){ aantalKinderen+=1;}
    else{aantalVolwassen+=1;}
    Leeftijd=Number(prompt('Leeftijd (tussen 0 en 8)'));
}
console.log('aantal volwassen',aantalVolwassen)
console.log('aantal kinderen', aantalKinderen)
