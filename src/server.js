const http = require('http');
const router = require("./controller/router");
const handleController = require("./controller/handle/errorController");
const PORT = 8080;

const server = http.createServer((req, res) => {
    let url = req.url;
    let arrPath = url.split("/");
    let path = arrPath[1];
    let id = -1;
    if (arrPath.length > 2) {
        path = arrPath[1];
        id = arrPath[2];
    }
    if (arrPath.length <= 2) {
        arrPath = [1]
    }
    let chosenHandle;
    if (router[path] !== undefined) {
        chosenHandle = router[path];
    } else {
        chosenHandle = handleController.showNotFound;
    }
    chosenHandle(req, res, id);
});

server.listen(PORT, 'localhost', () => {
    console.log(`server is running at ${PORT}`);
});