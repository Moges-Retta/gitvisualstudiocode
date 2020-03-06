const prompt = require("prompt-sync")();
let Leeftijd=Number(prompt('Leeftijd (tussen 0 en 8)'));
let aantalBezoekersKorting=0;
let aantalVolwassen=0;
while (Leeftijd != 0) {
    if (Leeftijd <= 7 || Leeftijd > 80) {
        aantalBezoekersKorting += 1;
    }
    else { aantalVolwassen += 1; }
    Leeftijd = Number(prompt('Leeftijd (tussen 0 en 8)'));
}

console.log('aantal bezokers met korting',aantalBezoekersKorting)
