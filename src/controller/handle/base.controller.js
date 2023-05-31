const fs = require('fs');

class BaseController {
    showHome = async (req, res) => {
        fs.readFile('./src/view/home/index.html', "utf-8", (err, data) =>{
            if (err) throw err.message
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
}

module.exports = new BaseController()