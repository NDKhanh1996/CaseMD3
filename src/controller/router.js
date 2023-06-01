const productController = require("./handle/admin_productController");
const router = {
    "home": productController.showHome,
    "add": productController
}

module.exports = router;