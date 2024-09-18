const express = require('express');
const v1Router = require('./v1/index');
const v2Router = require('./v2/index');
const router = express.Router(); // express router object


router.use('/v1', v1Router); // /v1/ping , /v1/todo/getTodos , 
router.use('/v2', v2Router); // /v2/ping
module.exports = router;