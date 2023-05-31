const productController = require("./handle/admin_productController");
const router = {
    "home": productController.showHome
}

module.exports = router;