exports.getProduct = (req,res)=>{
    console.log("get product working");
    res.json({"key" : "value GET json"});
};

exports.postProduct = (req,res)=>{
    console.log("post product working");
    const body = req.body ;
    res.json(body);
}

exports.putProduct = (req,res)=>{
    console.log("put product working");
    const body = req.body ;
    res.json(body);
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