const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kissme@123',
  database: 'case_products_md3',
  charset: 'utf8_general_ci'
});
connection.connect(function (err) {
  if (err) {
    throw err.message;
  }
  else
    console.log("Connect Success");
});
class InsertDatabase{
  static insertUsers(nameUser, phoneNumber, email, password, role) {
    const sql = `INSERT INTO users (nameUser, phoneNumber, email, password, role) VALUES ('${nameUser}',${phoneNumber},'${email}','${password}',${role})`
    connection.query(sql, function (err) {
  if (err) throw err.message;
  console.log('Insert data success');
    });
    
};
static insertCategories(categoryName) {
    const sql = `INSERT INTO categories (categoryName) VALUES ('${categoryName}')`
    connection.query(sql, function (err) {
  if (err) throw err.message;
  console.log('Insert data success');
    });
};

static insertProducts(productName, price, quantity, description,categoryId, image) {
    const sql = `INSERT INTO products (productName,price,quantity,description,categoryId,image) VALUES ('${productName}',${price},${quantity},'${description}',${categoryId},'${image}')`
    connection.query(sql, function (err) {
  if (err) throw err.message;
  console.log('Insert data success');
    });
  };
  
static insertCarts(userId) {
    const sql = `INSERT INTO carts (userId) VALUES (${userId})`
    connection.query(sql, function (err) {
  if (err) throw err.message;
  console.log('Insert data success');
    });
  }
static insertTemporaries(productId, cartId, quantity) {
    const sql = `INSERT INTO temporaries (productId, cartId, quantity) VALUES (${productId},${cartId},${quantity})`
    connection.query(sql, function (err) {
  if (err) throw err.message;
  console.log('Insert data success');
    });
};
};
InsertDatabase.insertTemporaries(4,4,30)



