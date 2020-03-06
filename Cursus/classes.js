/*class Rechthoek {
    constructor() { 
    console.log("Een Rechthoek object wordt gemaakt");
    }
    }
    const rechthoek = new Rechthoek(); 
    const nogEenRechthoek = new Rechthoek();*/

    /*class Rechthoek {
        constructor() {
        this.lengte = 5; 
        this.breedte = 3;
        }
        }
const rechthoek = new Rechthoek(); 
console.log(rechthoek.lengte); 
console.log(rechthoek.breedte);
const nogEenRechthoek = new Rechthoek();
console.log(nogEenRechthoek.lengte);
console.log(nogEenRechthoek.breedte);
nogEenRechthoek.lengte = 7; 
console.log(nogEenRechthoek.lengte); 
console.log(rechthoek.lengte);*/
/*class Rechthoek {
    constructor(lengte, breedte) { 
    this.lengte = lengte; 
    this.breedte = breedte; 
    }
    verdubbel() { 
        this.lengte *= 2; 
        this.breedte *= 2;
        }
    }
   /* const rechthoek = new Rechthoek(5, 3); 
    console.log(rechthoek.lengte);
    console.log(rechthoek.breedte);
    const nogEenRechthoek = new Rechthoek(7, 4);
    console.log(nogEenRechthoek.lengte);
    console.log(nogEenRechthoek.breedte);

const rechthoek = new Rechthoek(5, 3);
rechthoek.verdubbel(); 
console.log(rechthoek.lengte);
console.log(rechthoek.breedte);*/

class goedDoel{
    constructor(naam){
        this.naam=naam;
        this.gestorteBedrag=[];
    }
    stort(bedgrag){
        this.gestorteBedrag.push(bedgrag);
    }
    opbrengst(){
        return this.gestorteBedrag.reduce((total,dollar)=>total+dollar);
    }
}
const doel=new goedDoel('Corona virus');
doel.stort(10);
doel.stort(10);
doel.stort(10);
console.log(doel.opbrengst());
doel.gestorteBedrag.forEach(bedgrag=>console.log(bedgrag))