// requirements
const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router
.get("/products", productController.getProduct)
.post("/products", productController.postProduct)
.put("/products", productController.putProduct)
.patch("/products", productController.patchProduct)
.delete("/products", productController.deleteProduct);

exports.router = router ;