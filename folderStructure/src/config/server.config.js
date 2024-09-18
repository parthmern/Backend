const dotenv = require('dotenv');
dotenv.config();

// console.log(require('dotenv').config());    // { parsed: { PORT: '3000' } }

module.exports = {
    PORT: process.env.PORT
}