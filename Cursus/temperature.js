const prompt = require("prompt-sync")();
'use strict';
const temperature=Number(prompt('Geef temperature'));
/*if (temperature<=0){
    console.log('Het vriest.');
    console.log('Je doet better een dikke jas aandoen');
}
else{
    console.log('een lichte jas volstaat');
}*/

if (temperature<=0){
    if(temperature<=40){
        console.log('Blijf thuis');
    }
    else{
        console.log('Doe een dikke jas aan');
    }  
}
