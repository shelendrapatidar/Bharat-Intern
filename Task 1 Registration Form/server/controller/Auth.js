const User = require("../models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();

// SignUp router handler
exports.register = async (request, response) => {
  try {
    // fetch the data from body
    const { name, email, password } = request.body;

    // if invalid fields
    if (!name && !email && !password) {
      return response.status(400).json({
        success: false,
        message: "Please Fillthe fields Correctly ",
      });
    }

    // check if user already exists
    let user = await User.findOne({ email });

    // if exists
    if (user) {
      return response.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create new user
    user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // if user created
    if (user) {
      console.log("User Registered Successfully");
      return response.status(201).json({
        success: true,
        message: "User Registered Successfully",
      });
    }
  } catch (error) {
    console.error(error);
    console.log(`Error Occured ${error.message}`);
    return response.status(500).json({
      success: false,
      message: "Error in registration",
    });
  }
};
