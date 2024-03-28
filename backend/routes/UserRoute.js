const express = require("express");

const { createUser, getUsers, getUser, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.post("/create", createUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;