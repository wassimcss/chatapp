const express = require("express")
const productCtrl = require("../controllers/productCtrl")
const Router = express.Router()

Router.get("/products",productCtrl.getProducts)

Router.post("/products",productCtrl.addProduct)

Router.patch("/products/:id",productCtrl.reviews)

module.exports = Router