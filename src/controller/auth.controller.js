const BaseController = require("./base.controller");

class AuthController extends BaseController{
    async showFormRegister(req, res) {

    }

    async showFormLogin(req, res) {
        let html = await this.getTemplate('./src/view/auth/login.html');
        res.writeHead(200, {'Content-type': "text/html"})
        res.write(html)
        return res.end()
    }
}

module.exports = new AuthController()