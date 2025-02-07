const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    console.log("req.cookies", req.cookies);
    console.log("req.body", req.body);
    console.log("req.header", req.header("Authorization"));
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header("Authorization").replace("Bearer ", "");


    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` });
    }

    try {
      const payload =  jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
    } catch (error) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
    });
  }
};
exports.isUser = async (req, res, next) => {
  try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.role !== "User") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for user",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};

exports.isAdmin = async (req, res, next) => {
  try {
		const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.role !== "Admin") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Admin",
			});
		}
		next();
	} catch (error) {
		return res
			.status(500)
			.json({ success: false, message: `User Role Can't be Verified` });
	}
};
