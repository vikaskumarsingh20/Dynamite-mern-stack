const express = require('express');
const { signup } = require('./controllers/signup');
const { login } = require('./controllers/login');
const { deleteUser } = require('../controllers/delete');



const router = express.Router();

// Route to create a new todo
router.post('/signup',signup);
router.get('/login',login);
router.delete('/delete',deleteUser);

module.exports = router;