const fs = require("fs");
const productService = require('../service/product.service')

class ProductController {
    getHtmlProduct = (products, getHtml) => {
        let productHtml = "";
        products.map(item => {
            productHtml += `
            <div class='box-container'>
                <div class='box'>
                    <img src='https://i.postimg.cc/yxcJHKdS/menu-1.png' alt=''>
                    <button id="button1" style="border: none;">
                        <div class="video-time" type="button" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16" onclick="myButton(${item.productId})">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </div>
                    </button>
                    <h3>${item.productName}</h3>
                    <div class='price'>$${item.price} <span>$20.99</span></div>
                    <div>
                        <button type="submit" class="btn btn-outline-dark">Sửa</button>
                        <button type="submit" class="btn btn-outline-info">Xoá</button>
                    </div>
                </div>
            </div>
            `
        })
        getHtml = getHtml.replace("{productList}", productHtml);
        return getHtml;
    }

    showHome = (req, res) => {
        if (req.method === "GET") {
            fs.readFile("./view/admin.html", "utf-8", async (err, indexHtml) => {
                let products = await productService.findAll()
                indexHtml = this.getHtmlProduct(products, indexHtml)
                res.write(indexHtml);
                res.end();
            })
        }
    }

}

module.exports = new ProductController();