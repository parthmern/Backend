const model = require("../model/productModel");
const product = model.product;

exports.getProduct = (req,res)=>{
    console.log("get product working");
    
};

exports.postProduct = (req,res)=>{
    console.log("post or create product working");
    // new Product created in "product- collection"
    const Product = new product();
    Product.title = "trial";
    Product.price = 88;
    Product.save()
    .then((doc)=>{
        console.log("saveddd",doc);
        res.status(201).json(res.body);
    })
    .catch((error)=>{
        console.log("not savveed",error);
        res.status(400).json(res.body);
    });
    
}

exports.putProduct = (req,res)=>{
    console.log("put product working");
    product.findOne({title:"trial"})
    .then((doc)=>{console.log(doc)})
    .catch((err)=>{console.log(err)});
}

exports.patchProduct = (req,res)=>{
    console.log("patch product working");
    const body = req.body ;
    res.json(body);
}

exports.deleteProduct = (req,res)=>{
    console.log("delete product working");
    const body = req.body ;
    res.json(body);
}