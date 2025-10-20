const fs = require('fs');
const { error } = require('console');

//czytamy zawartość pliku: chopeitxt.tx
let data = " \nTekst do dopisania";
fs.appendFile('chopietxt.txt',data,(error)=>{
    if(error){
        return console.log(`\n Error chopie: ${error}`);
    }
    console.log(fs.readFileSync('chopietxt.txt','utf-8'));

});