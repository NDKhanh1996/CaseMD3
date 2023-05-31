const baseController = require('./handle/base.controller');

const router = {
    "home" : baseController.showHome,
}

module.exports = router;