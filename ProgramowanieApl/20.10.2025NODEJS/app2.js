// import moduł URL
const url = require('url');
const adres = "https://pzs1.pszczyna.edu.pl/category/zastepstwa/";

const addr = url.parse(adres,true);

console.log(`
    HOST: ${addr.host},
    HREF: ${addr.href},
    HOSTNAME: ${addr.hostname},
    PATH: ${addr.path},
    PROTOCOL: ${addr.protocol},
    `);