const Product = require("../models/productModel");
//Get all products
const getAllProducts = async(req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
}



//Get single product
const getSingleProduct = async(req, res) => {
    const { id } = req.params
    const product = await Product.findById(id);
    if (!product) {
        return res.status(400)
    }
    res.status(200).json(product);
}



//Post product

const postProduct = async(req, res) => {
    const { productName, productPrice, productDescription, productDiscountPrice, Cod, productImg, productsCategory } = req.body;
    try {
        const newProduct = await Product.create({ productName, productPrice, productDescription, productDiscountPrice, Cod, productImg, productsCategory });
        res.status(201).json(newProduct)


    } catch (error) {
        res.status(500).json(error)
    }
}


//Delete product
const deleteProduct = async(req, res) => {
    const { id } = req.params;
    const product = await Product.findOneAndDelete({ _id: id });
    if (!product) {
        return res.status(400)
    }
    res.status(204).json(product);
}



module.exports = {
    getAllProducts,
    postProduct,
    getSingleProduct,
    deleteProduct

}