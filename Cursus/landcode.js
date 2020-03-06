const prompt = require("prompt-sync")();
'use strict';
/*const hoeveelste = Number(prompt("De hoeveelste ben je:"));
switch (hoeveelste) {
    case 1:
        console.log("Gouden medaille.");
        break;
    case 2:
        console.log("Zilveren medaille.");
        break;
    case 3:
        console.log("Bronzen medaille.");
        break;
    default:
        console.log("Geen medaille.");
}*/

const landcode = prompt("Geef de landcode:");
switch (landcode) {
    case "B":
        console.log("Belgium.");
        break;
    case "NL":
        console.log("Nederland.");
        break;
    case "FR":
        console.log("Frankrijk.");
        break;
    default:
        console.log("Onbekend");
}
