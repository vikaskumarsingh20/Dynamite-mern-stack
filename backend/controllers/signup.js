const User = require('../models/user');
const bcrypt = require('bcryptjs');

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



// exports.signup = async (req, res) => {
//     try {
//         const { email, password, repeatPassword } = req.body;

//         if (password !== repeatPassword) {
//             return res.status(400).json({ message: 'Password and repeat password do not match' });
//         }

//         const user = await User.findOne({ email });

//         if (user) {
//             return res.status(400).json({ message: 'Email already exists' });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashPassword = await bcrypt.hash(password, salt);

//         const newEntry = new User({
//             email,
//             password: hashPassword,
//             repeatPassword: hashPassword
//         });

//         const savedSignup = await newEntry.save();
//         res.status(201).json({ message: 'Signup created successfully', signup: savedSignup });
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating Signup', error });
//     }
// };

