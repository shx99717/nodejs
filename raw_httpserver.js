const http = require('http');
const path = require('path');
const fs = require('fs');
const { url } = require('inspector');

const server = http.createServer((req, resp) => {
    console.log(`The requesting url is ${req.url}`);

    if(req.url === '/') {
        // access http://localhost:5000/
        resp.writeHead(200, {"Content-Type": "text/html" });
        resp.end("<h1>Home</h1>");
    } else if(req.url === '/about') {
        resp.writeHead(200, {"Content-Type": "text/html" });
        // access http://localhost:5000/about
        resp.end("<h1>About</h1>");
    } else if(req.url === '/good') {
        fs.readFile(path.join(__dirname, 'public', 'good.html'), (err, content) => {
            if(err) throw err;
            resp.writeHead(200, {"Content-Type": "text/html" });
            resp.end(content);
        });
    } else {
        resp.writeHead(200, {"Content-Type": "text/html" });
        // access http://localhost:5000/any
        resp.end("<h1>Other page</h1>");
    }
});

// Get the port from the environmental variable, if none found use 5000
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port ${port}`));
