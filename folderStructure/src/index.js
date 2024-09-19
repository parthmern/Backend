const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require('body-parser');
const appRoute = require("./routes/routes.index");



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use("/api", appRoute);  // /api/v1/ping

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} PORT`);
})