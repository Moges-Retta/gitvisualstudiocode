'use-strict';
[{Naam:"John", spaargeld:800},
 {Naam:"Bart", spaargeld:1005},
 {Naam:"Moges",spaargeld:5000}
].filter(spaar=>spaar.spaargeld>1000)
 .forEach(persoon => console.log(`${persoon.Naam}:${persoon.spaargeld}`));