const fs = require("fs");
const productService = require("../../service/admin_productService");
class ProductController {
    getHtmlProduct = (products, getHtml) => {
        let productHtml = "";
        products.map(item => {
            productHtml += `
            <div class='box-container'>
                <div class='box'>
                    <img src='https://i.postimg.cc/yxcJHKdS/menu-1.png' alt=''>
                    <h3>Tasty and Healthy</h3>
                    <div class='price'>R$ 15,99 <span>R$20.99</span></div>
                    <a href='#' class='btn'>Add to Cart</a>
                </div>
            </div>
            `
        })
        getHtml = getHtml.replace("{productList}", productHtml);
        return getHtml;
    }

    showHome = async (req, res) => {
        if (req.method === "GET") {
            fs.readFile("./view/admin.html", "utf-8", (err, indexHtml) => {
                let products = await productService.findAll()
                indexHtml = this.getHtmlProduct(products, indexHtml)
                res.write(indexHtml);
                res.end();
            })
        }
    }
}

module.exports = new ProductController();