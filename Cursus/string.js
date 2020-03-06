const prompt=require('prompt-sync')();
'use-strict'
const naam=prompt('naam: ');
console.log('uw now bevat',naam.length,'letters')
console.log('de eerste letter van uw naam is ', naam[0])
for(volgnummer=0;volgnummer!=naam.length;volgnummer++){
    console.log(naam[volgnummer])
}
for (const letter of naam){
    console.log(letter)
}
const naam2=prompt('enter naam: ');
let fullNaam=naam+' '+ naam2;
let fulNaam=`${naam} ${naam2}`;
console.log(fullNaam)
let getal=7;
let getal2=7;
console.log(`de som van ${getal} en ${getal2} is ${getal+getal2}`);
console.log(fullNaam.includes('og'))
console.log(fullNaam.endsWith('g'))
console.log(fullNaam.startsWith('L'))
console.log(fullNaam.lastIndexOf('og'))