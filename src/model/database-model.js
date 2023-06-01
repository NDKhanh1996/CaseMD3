const mysql = require('mysql')
class DatabaseModel{
    constructor() {
        this.host = '127.0.0.1',
            this.user = 'root',
            this.password = 'Kissme@123',
            this.database = 'case_products_md3'
    };
    connect() {
        return mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database : this.database
        })
    }
};
module.exports = DatabaseModel