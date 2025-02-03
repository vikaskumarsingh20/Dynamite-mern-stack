const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    try {
        const { email, password, repeatPassword } = req.body;

        if (password !== repeatPassword) {
            return res.status(400).json({ message: 'Password and repeat password do not match' });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({ message: "Email is not valid" });
        }

        const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      if (!passwordRegex.test(password)) {
        return res.status(400).json({
          message:
            "Password should have at least one special character, one upper case,one lower case and one number, and should be at least 6 characters long",
        });
      }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newEntry = new User({
            email,
            password: hashPassword,
            repeatPassword: hashPassword
        });

        const savedSignup = await newEntry.save();
        res.status(201).json({ message: 'Signup created successfully', signup: savedSignup });
    } catch (error) {
        res.status(500).json({ message: 'Error creating Signup', error });
    }
};


 
