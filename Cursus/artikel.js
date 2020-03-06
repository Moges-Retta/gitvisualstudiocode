class Artikel{
    constructor(naam,prijs,btwPercent){
    this.naam=naam;
    this.prijs=prijs;
    this.btwPercent=btwPercent;
    }

    prijsInclusiefBTW(){
        return this.prijs*(1+this.btwPercent/100)
    }
}
const artikel=new Artikel('De Morgen',5,10)
console.log(artikel.prijsInclusiefBTW())