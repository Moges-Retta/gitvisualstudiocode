"use strict";
class Persoon {
    constructor(familienaam) {
        this.familienaam = familienaam;
        this.voornamen = [];
    }
    voornaam(voornaam) {
        this.voornamen.push(voornaam);
    }
    naam() {
        let naam = "";
        this.voornamen.forEach(voornaam => naam += voornaam + " ");
        return naam + this.familienaam;
    }
}
const ik = new Persoon("Desmet");
ik.voornaam("Hans");
ik.voornaam("Cyriel");
console.log(ik.naam());
