const { Router } = require("express");
const {
    createProduct,
    getAllProducts,
    getProductsByCategory,
    deleteProduct,  
    updateProduct   
} = require("../controllers/productControllers"); 

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.post("/createProduct", createProduct);
productRouter.get("/category/:category", getProductsByCategory);
productRouter.delete("/:id", deleteProduct);
productRouter.put("/:id", updateProduct);   

module.exports = productRouter;