const prompt = require("prompt-sync")();
let Leeftijd=prompt('Heb je werk');

if (Leeftijd != 'ja') {
    opleiding = prompt('Wil je een opleiding volgen?');
    if (opleiding == 'ja') {
        console.log('Je vindt opleidingen op www.vdab.be/opledingen ');}
    else {
            console.log('Je vindt vacatures op www.vdab.be/jobs')
        }
    }
else{console.log('Veel plezier')}

