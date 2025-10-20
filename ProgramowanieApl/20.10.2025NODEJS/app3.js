const fs = require('fs');
const dirname = "./"; //Katalog do odczytu

fs.readdir(dirname,(error, files)=>{
    if(error)
        console.log(`Error: ${error}`);
    else{
        console.log(`\n Zawartość bieżącego katalogu`)
        files.forEach(file=>{
            console.log(file);
        });
    }
});