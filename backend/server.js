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
//middleware
app.use(express.json());

app.use(cookiesParser());

// CORS Configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// File Upload
app.use(fileupload({
  useTempFiles : true,
  tempFileDir : '/Images/'
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
