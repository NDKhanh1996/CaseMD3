const connection = require("../entity/connection");
class ProductService {
    connect;
    constructor() {
        connection.connectToMySql();
        this.connect = connection.getConnection();
    }
    findAll = () => {
        return new Promise((resolve, reject) => {
            this.connect.query(`SELECT p.* FROM products p JOIN categories c ON p.categoryId = c.categoryId`, (err, products) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(products)
                }
            })
        })
    }
}

module.exports = new ProductService();