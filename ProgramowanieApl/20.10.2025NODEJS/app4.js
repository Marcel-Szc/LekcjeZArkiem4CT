const fs = require('fs');
const { error } = require('console');

//czytamy zawartość pliku: chopeitxt.tx
fs.readFile('chopietxt.txt','utf-8',function(error, data){
    if(error){
        return console.log(`\n Error chopie: ${error}`);
    }
    console.log(data);

});