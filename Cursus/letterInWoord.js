const prompt=require('prompt-sync')();
'use-strict'
const letter=prompt('geef letter: ')
const word=prompt('geef word: ')
let count=0;
for (character of word){
    if(character==letter){count+=1;}
}
console.log(`${letter} komt ${count} keer voor in ${word} `)
