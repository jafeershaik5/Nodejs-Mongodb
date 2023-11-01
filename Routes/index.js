const express = require('express')
const router = express.Router()

const users = require('../Controllers/userController')

router.get("/users", users.findAll);
router.post("/users", users.create);
router.put("/users", users.update);
router.get("/users/:id", users.findOne);

module.exports = router;