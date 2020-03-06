const prompt=require('prompt-sync')();
const word=prompt('geef word: ')
slicer=-1;
count=0;
for(volgnummer=0;volgnummer!=word.length;volgnummer++){

    if (word[volgnummer]==word[word.length-volgnummer-1]){
        count+=1;};
        }
if (count==word.length){
    console.log(`${word} is palindroom`)
}
