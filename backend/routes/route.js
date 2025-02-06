const express = require('express');
const { signup } = require('../controllers/signup');
const  {login}  = require('../controllers/login');
const { deleteUser } = require('../controllers/delete');
const { auth, isUser, isAdmin } = require('../middleware/auth');



const router = express.Router();

// Route to create a new todo
router.post('/signup',signup);
router.post('/login',login);
router.delete('/delete',deleteUser);

// protected routes
router.get('/test', auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected route for TEST"
    });
});
router.get('/user', auth, isUser, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected route for user"
    });
});

router.get('/admin', auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected route for admin"
    });
});

module.exports = router;