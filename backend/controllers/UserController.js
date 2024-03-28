const UserModel = require('../models/UserModel');

//create a user
const createUser = (req, res) => {
  UserModel.create(req.body)
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

//get all users
const getUsers = (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

//get one user
const getUser = (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

//update one user
const updateUser = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, 
    {
      name: req.body.name, 
      age: req.body.age, 
      email: req.body.email
    })
  .then(users => res.json(users))
  .catch(err => res.json(err))
}

//delete one user
const deleteUser = (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
}


module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };