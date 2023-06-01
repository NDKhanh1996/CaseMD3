const BaseController = require('./base.controller');
class HomeController{
    async getHomePage (req, res){
        let html = await BaseController.getTemplate('./src/view/home/index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(html);
        res.end();
    }
}

module.exports = new HomeController()