import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// Register a new user

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ Message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 15);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      Message: "Successfully Registered",
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ Message: "Server error" });
  }
};

// LOgin user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ Message: "User Not Found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ Message: "Invalid Credentials" });

    if (user && isMatch) {
      req.session.user = user;
      console.log("🚀 ~ Session after login:", req.session);
      console.log("🚀 ~ Session after login:", req.session.user);
      return res.status(200).json({ Message: "Login Successfully" });
    }
  } catch (error) {
    console.log("🚀 ~ loginUser ~ error:", error);
    return res.status(400).json({ Error: error.message });
  }
};

// logout user

export const logOut = async (req, res) => {
  // console.log("🚀 ~ logOut ~ req:", req.session)
  req.session.destroy(function (err) {
    if (err) {
      return res.status(400).json({ Message: "Logout failed" });
    }
  });
  console.log("🚀 ~ logOut ~ req:", req.session);
  return res
    .status(200)
    .json({ Message: `Session Deleted and logout successfully` });
};
