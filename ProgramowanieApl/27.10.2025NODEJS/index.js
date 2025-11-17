const http = require('http');
const port = 8080;

http.createServer(function(request,response){
    response.writeHead(200,{'content-type' : 'text/html'});

    response.write(`
        <h2>Dziala</h2>
        `);
    response.end();
}).listen(port)