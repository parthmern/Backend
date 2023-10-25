console.log("start");

// create server
const express = require("express");
const server = express();

//=============================================
// MIDDLEWARES 

// body parser that means res will be in json format
server.use(express.json());

// morgan for information
const morgan = require("morgan");
server.use(morgan('default'));

// for server static files
server.use(express.static('public'));

//==========================================

server.listen(3000,()=>{
    console.log("server starts on 3000 port");
})

//===========================================
//  C R U D

// GET - Read
server.get("/products",(req,res)=>{
    res.json({"key" : "value GET json"});
})

// POST - Create 
server.post("/products",(req,res)=>{
    const body = req.body ;
    res.status(201).json(body);
})

// PUT - Update
server.put("/products",(req,res)=>{
    const body = req.body ;
    res.json(body);
})

// PATCH - Update
server.patch("/products",(req,res)=>{
    const body = req.body ;
    res.json(body);
})

// DELETE - Delete
server.delete("/products",(req,res)=>{
    const body = req.body ;
    res.json(body);
})