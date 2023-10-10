# 💚 What is Backend ?

## 💙 Internet
➔ Like i have smartphone and i am sending "hii" msg to anyone then what happend here ?? <br/>
➔ it converts into *data packets* which are invisible for human and they go to the nearest tower / ISP <br/>
➔ Then tower receive data packets and convert them into *electrical signals*  <br/>
➔ these electrical signals goes to any other country through *optical fibers* through ocean <br/>
➔ then the same electrical signals goes to Tower in other country then converted into data packets <br/>
➔ data packets received by user <br/>

<br/>
➔ for small area , sended HII msg that converted into packets then it goes to tower / ISP ( internet service provider like JIO,AIRTEL,VI ) then same process as above <br/>
<br/>


➔ this ecosystem known as Internet [ more info chatGpt](https://chat.openai.com/share/86e0c5f3-9882-4b13-b7c4-6552d4afefce)

## 🧡 IP address and Mac address
➔ mobile has ip address and mac address <br/>
➔ but when we connect with router at that time it uses Mac address <br/>

## 💛 Server
➔ A server is a computer or a software system that provides services, resources, or functionality to other computers or programs, often referred to as clients.  <br/>
➔ if any computer is connected with internet and it programmed to accept Request and it can give Response.  <br/>
➔ computer + programmed + connects with internet = server  <br/>
➔ Client-server architecture = client jo request send karta hai and Server jo response bhejta hai <br/>
➔ Serverroom has just many CPUs <br/>

## ❤️ http and https
➔ hyper text transfer protocol / secured <br/>
➔ protocol hai jiske basis par internet surf karne ki aazadi milti hai - data ka aana jaana iski wajah se ho raha hai <br/>
➔ if any web has HTTP means not secured then the packages sended by the device can be seen by anyone by using hacking devices because data is not encrypted <br/>
➔ HTTPS data packages are also captured by anyone but the data are encrypted so there is no meaning of this <br/>

## 💜 Ports 
➔ server par commumication k liye port hote hai - port par server listen karta hai <br/>
➔ ports are just numbers <br/>
➔ [chatGpt](https://chat.openai.com/share/c674fb10-b527-46ef-9d8a-1429e97c6620) <br/>

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

## 🧡 server create using Express.js
➔ create folder then go into this folder using terminal <br/>
➔ `npm init` or `npm init -y` to create package.json file <br/>
➔ `npm i express` to create nodeModule file <br/>
➔ then create `server.js` file

```
// 📂 server.js

// 1) server instantiate
const express = require('express');
const app = express();

// 2) server live

app.listen(3000, ()=>{
    console.log("server started at port number 3000");
})

// here 3000 is port number from where our server can do communication or listen

```

➔ Routes

```
const bodyParser = require('body-parser');   // used to parese req.body in express -> PUT or POST
app.use(bodyParser.json() );   // specifically parse JSON data & add it to the request.Body object

// here "/" is route

app.get('/',(request,response)=>{
    response.send("Hello jee, kaise ho");
})


app.post('/api/cars', (request,response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted successfully");
})

```

➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

## 💛 MONGOOSE

➔ connects mongoDB database and expressJs server using MONGOOSE ( ODM library - object document model )  <br/>
➔ in expressJs server data treats as object and in mongo data treat as document  <br/>

```
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testDb',{
    useNewurlParser : true,
    useUnifiedTopology : true
})
.then(()=>{console.log("connection successfull between express server with mongoDB")})
.catch(()=>{console.log("error")})


// here testDb is db name that we have created in the mongodb compass
```


