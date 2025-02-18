const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const routes = require("./routes/route");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const upload = require("./routes/fileuploadroutes");
const {cloudinaryConnect} = require("./config/cloudinary");

require("dotenv").config();

// Connect to MongoDB
dbConnect();

// Connect to Cloudinary  
cloudinaryConnect();  

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  })
);
//middleware
app.use(express.json());

app.use(cookiesParser());



// File Upload
app.use(fileupload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

// Routes
app.use("/api/v1", routes);

// routes for cloudinary
app.use("/api/v1/upload", upload);

// Default route
app.get("/", (req, res) => {
  res.send(`<h1>This is the default route</h1>`);
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
