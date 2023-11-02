console.log("start");

const express = require("express");
const server = express();

server.listen(3000,()=>{
    console.log("server started at 3000 port");
})

// MIDDLEWARES below
server.use(express.json());
// const morgan = require("morgan");
// server.use(morgan('default'));
server.use(express.static('public'));

// product router
const productRouter = require("./routes/productRoute");
server.use("/", productRouter.router);

//mongoose connect
const mongoose = require("mongoose");
main();
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/testStore');   
    console.log("db connected- mongoose");
}


