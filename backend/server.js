const express = require('express');
const app = express();
const dbConnect = require('./config/database');
const { signup } = require('./controllers/signup');
 
require('dotenv').config();

// Connect to MongoDB
dbConnect();

//middleware
app.use(express.json());

// Routes
app.use('/api/v1', signup);

// Default route
app.get('/', (req, res) => {
    res.send(`<h1>This is the default route</h1>`);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
