const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const registerUser = async (userData) => {

    const { name, username, email, password } = userData;

    const existingUser = await User.findOne({
        $or: [
            { email },
            { username }
        ]
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword =
        await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        username,
        email,
        password: hashedPassword
    });

    return {
        user,
        token: generateToken(user._id)
    };
};

const loginUser = async (email, password) => {

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    return {
        user,
        token: generateToken(user._id)
    };
};

module.exports = {
    registerUser,
    loginUser
};