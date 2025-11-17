//import frameworka express
const express = require('express');

//wywołanie frameworka
const app = express();
const port = 8080;

//obsługa rządania GET strony głównej
app.get('/',(request,response)=>{
    response.send('<h1>Express JS do kawy</h1>');
});
app.listen(port,()=>{
    console.log(`Serwer nasluchuje pod adresem: http://localhost:${port}`);
});