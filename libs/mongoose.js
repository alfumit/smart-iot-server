/**
 * Mongoose connection configuration module
 * @module libs/mongoose
 */
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/test');

module.exports = mongoose;
