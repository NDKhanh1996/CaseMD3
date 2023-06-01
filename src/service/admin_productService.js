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

    productAdd = () => {
        return new Promise((resolve, reject) => {
            this.connect.query(`INSERT INTO products (productName, price, quantity, description, categoryId, image)
            VALUES ("Cà phê sữa", 1000, 1, "ngon", 1, "https://lepathcoffee.com/wp-content/uploads/2021/12/Cafe-Sua-2.jpg")`, (err, addHtml) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(addHtml)
                }
            })
        })
    }
}

module.exports = new ProductService();