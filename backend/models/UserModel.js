const mongoose = require("mongoose");

const Schema = mongoose.Schema

const userSchema = new Schema({
  name:{
    type: 'string',
    required: true,
  },
  age: {
    type: 'number',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
  }
})

// the collection name on mongodb atlas and the schema name
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;