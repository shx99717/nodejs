const url = require('url');

const myURL = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myURL.href);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams);


myURL.searchParams.forEach((value, key) => {
    console.log(`${key} : ${value}`);
})