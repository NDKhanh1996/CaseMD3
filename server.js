const http = require('http');
const router = require("./src/controller/router");
const fs = require('fs');
const url = require('url')
const PORT = 8080;
const handleError = require('./src/controller/handle/error.controller');

let mimeTypes={
    'jpg' : 'images/jpg',
    'png' : 'images/png',
    'js' :'text/javascript',
    'css' : 'text/css',
    'svg':'image/svg+xml',
    'ttf':'font/ttf',
    'woff':'font/woff',
    'woff2':'font/woff2',
    'eot':'application/vnd.ms-fontobject'
}


const server = http.createServer((req, res) => {
    let urlPath = url.parse(req.url).pathname;
    let trimPath = urlPath.replace(/^\/+|\/+$/g, '');

    const filesDefences = urlPath.match(/\.js|\.css|\.png|\.svg|\.jpg|\.ttf|\.woff|\.woff2|\.eot/);
    if (filesDefences) {
        const extension = mimeTypes[filesDefences[0].toString().split('.')[1]];
        res.writeHead(200, { 'Content-Type': extension });
        fs.createReadStream(__dirname + req.url).pipe(res)
    } else {
        let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handleError.showNotFound;
        chosenHandler(req, res);
    }
})

server.listen(PORT, 'localhost', () => {
    console.log(`server is running at ${PORT}`);
});