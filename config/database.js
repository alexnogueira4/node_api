// Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_CONNECTION;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
