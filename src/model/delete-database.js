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
class DeleteDatabase{
  static deleteUsers(userId) {
    this.deleteCarts(userId);
    const sql = `DELETE FROM users WHERE userId =  ${userId};`
    connection.query(sql, function (err) {
    if (err) throw err.message;
    console.log('Delete data success');
    });
    
  };
  
  static deleteTemporaries(productId) {
    const sql = `DELETE FROM temporaries WHERE productId =  ${productId};`
    connection.query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  };
  static deleteProduct(productId) {
    this.deleteTemporaries(productId)
    const sql = `DELETE FROM  products WHERE productId =  ${productId};`
    connection.query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  };
  static deleteCategories(categoryId) {
    this.deleteProduct(categoryId)
    const sql = `DELETE FROM  categories WHERE categoryId =  ${categoryId};`
    connection.query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  };
  static deleteCarts(userId) {
     this.deleteTemporaries(userId)
    const sql = `DELETE FROM  carts WHERE userId =  ${userId};`
    connection.query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  }

};
DeleteDatabase.deleteUsers(1)



 
