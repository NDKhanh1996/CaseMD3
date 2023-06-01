const connection = require("../entity/connection");
connection.connectToMySql()
class UpdateDatabase {
  static updateUser(userId, nameUser, phoneNumber, email, password, role) {
    const sql = `UPDATE users SET nameUser = '${nameUser}', phoneNumber = ${phoneNumber}, email = '${email}', password = '${password}', role = ${role} WHERE userId = ${userId}`;
    connection.getConnection().query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateProducts(productId, categoryId, productName, price, quantity, description, image) {
    const sql = `UPDATE products SET productName = '${productName}', price = ${price}, quantity = ${quantity}, description = '${description}', image = '${image}' WHERE productId = ${productId} AND categoryId = ${categoryId}`;
    connection.getConnection().query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateCategories(categoryId, categoryName) {
    const sql = `UPDATE categories SET categoryName = '${categoryName}' WHERE categoryId = ${categoryId}`;
    connection.getConnection().query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateCarts(cartId, userId) {
    const sql = `UPDATE carts SET userId = ${userId} WHERE cartId = ${cartId}`;
    connection.getConnection().query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }

  static updateTemporaries(cartId, productId, quantity) {
    const sql = `UPDATE temporaries SET productId = ${productId}, quantity = ${quantity} WHERE cartId = ${cartId}`;
    connection.getConnection().query(sql, function (err) {
      if (err) throw err;
      console.log('Update data success');
    });
  }
}


