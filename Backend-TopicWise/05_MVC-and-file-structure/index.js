console.log("start");

// import from controller
const productController = require("./controller/product");

// create server
const express = require("express");
const server = express();

//=============================================
// MIDDLEWARES 
server.use(express.json());
// const morgan = require("morgan");
// server.use(morgan('default'));
server.use(express.static('public'));

// product router
const productRouter = require("./routes/product");
server.use("/", productRouter.router);
//server.use("/xxxx", productRouter);

//==========================================

server.listen(3000,()=>{
    console.log("server starts on 3000 port");
})
 

