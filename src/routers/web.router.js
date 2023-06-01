const productController = require("../controller/product.controller");
const HomeController = require('../controller/home.controller')
const AuthController = require('../controller/auth.controller')

const handle = {};

handle.showLoginPage = (req, res) => {
    AuthController.showFormLogin(req, res).catch(err => console.log(err.message))
}



const webRouter = {
    "home" : HomeController.getHomePage,
    "admin/login": handle.showLoginPage
}

module.exports = webRouter;