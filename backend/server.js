const express = require('express');
const app = express();
const dbConnect = require('./config/database');
const routes = require('./routes/route');
const cors = require('cors');
 
require('dotenv').config();

// Connect to MongoDB
dbConnect();

//middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

// Routes
app.use('/api/v1', routes);

// Default route
app.get('/', (req, res) => {
    res.send(`<h1>This is the default route</h1>`);
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
