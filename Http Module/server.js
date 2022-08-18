const http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
    <!DOCTYPE thml>
    <html>
        <head>
        </head>
        <body>
            <h1> Hello World with Html <h1>
            <p> url: ${req.url}</p>            
            <p> method: ${req.method}</p>
        </body>
    </html>

    `
       );
}).listen(3000);

console.log("Web Server on port 3000");