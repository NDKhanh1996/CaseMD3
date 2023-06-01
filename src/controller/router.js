const HomeController = require('./handle/home.controller')
const router = {
    "home" : HomeController.getHomePage,
}

module.exports = router;