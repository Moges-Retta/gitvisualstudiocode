const prompt=require('prompt-sync')();
landNaamen=[];
oppervlakten=[];
naam=prompt('geef land naam: ');
while(naam!="stop"){
    oppervlakten.push(Number(prompt('geef oppervlakte: ')));
    landNaamen.push(naam);
    naam=prompt('geef land naam: ');
}
// gemiddelde oppervlakten
count=oppervlakten.length;
som=oppervlakten.reduce((oppervlakt1,oppervlakt2)=>oppervlakt1+oppervlakt2);
gemiddelde=som/count;
console.log("gemiddlede oppervlaakt is :", gemiddelde);
oppervlakten.forEach(oppervlakt=>console.log(oppervlakt<gemiddelde))
// onder het gemiddelde

 