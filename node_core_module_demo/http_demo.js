const http = require('http');

// Create server object
http.createServer((req, resp) => {
    // Write response
    resp.write("<h1>Hello World<h1>");
    resp.end();
}).listen(5000, () => console.log("Server running ..."))

// Access the webserver via http://localhost:5000/ at the browser 