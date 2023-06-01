const connection = require('../entity/connection')
connection.connectToMySql()
class DeleteDatabase {
  static deleteUsers(userId) {
    this.deleteCarts(userId);
    const sql = `DELETE FROM users WHERE userId =  ${userId};`
    connection.getConnection().query(sql, function (err) {
    if (err) throw err.message;
    console.log('Delete data success');
    });
    
  };
  
  static deleteTemporaries(productId) {
    const sql = `DELETE FROM temporaries WHERE productId =  ${productId};`
    connection.getConnection().query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  };
  static deleteProduct(productId) {
    this.deleteTemporaries(productId)
    const sql = `DELETE FROM  products WHERE productId =  ${productId};`
    connection.getConnection.query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  };
  static deleteCategories(categoryId) {
    this.deleteProduct(categoryId)
    const sql = `DELETE FROM  categories WHERE categoryId =  ${categoryId};`
    connection.getConnection.query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  };
  static deleteCarts(userId) {
     this.deleteTemporaries(userId)
    const sql = `DELETE FROM  carts WHERE userId =  ${userId};`
    connection.getConnection().query(sql, function (err) {
   if (err) throw err.message;
   console.log('Delete data success');
    });
  }

}
DeleteDatabase.deleteCarts(2)



 
