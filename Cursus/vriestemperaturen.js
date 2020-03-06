const prompt = require("prompt-sync")();
const Temperaturen = []; 
Temperaturen.push(prompt("Temperatuur:")); 
Temperaturen.push(prompt("Temperatuur:"));
for (const Temperatuur of Temperaturen) {
console.log(Temperatuur);
}