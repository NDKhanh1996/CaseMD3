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
class UpdateDatabase {
  static updateUser(userId, nameUser, phoneNumber, email, password, role) {
    const sql = `UPDATE users SET nameUser = '${nameUser}', phoneNumber = ${phoneNumber}, email = '${email}', password = '${password}', role = ${role} WHERE userId = ${userId}`;
    connection.query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateProducts(productId, categoryId, productName, price, quantity, description, image) {
    const sql = `UPDATE products SET productName = '${productName}', price = ${price}, quantity = ${quantity}, description = '${description}', image = '${image}' WHERE productId = ${productId} AND categoryId = ${categoryId}`;
    connection.query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateCategories(categoryId, categoryName) {
    const sql = `UPDATE categories SET categoryName = '${categoryName}' WHERE categoryId = ${categoryId}`;
    connection.query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateCarts(cartId, userId) {
    const sql = `UPDATE carts SET userId = ${userId} WHERE cartId = ${cartId}`;
    connection.query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateTemporaries(cartId, productId, quantity) {
    const sql = `UPDATE temporaries SET productId = ${productId}, quantity = ${quantity} WHERE cartId = ${cartId}`;
    connection.query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }
}


