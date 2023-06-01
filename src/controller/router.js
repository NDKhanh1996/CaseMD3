const productController = require("./handle/admin_productController");
const HomeController = require('./handle/home.controller')
const router = {
    "home" : HomeController.getHomePage,
    "add": productController
}


module.exports = router;