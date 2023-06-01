const fs = require('fs');
// const a = require('../../view/home/index.html')
class ErrorController {
    showNotFound = (req,res) => {
        fs.readFile('./src/view/notfound/notFound.html', "utf-8", (err, data) =>{
            if (err) throw err.message
           res.writeHead(200,{'Content-Type':'text/html'});
           res.write(data);
           res.end();
        });
    };
}

module.exports = new ErrorController;