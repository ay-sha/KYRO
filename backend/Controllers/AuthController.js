const { UserModel } = require('../Models/UserModel');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcrypt');

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existUser = await UserModel.findOne({ email });

        if (existUser) {
            return res.json({ message: "User already existed" });
        }

        const user = await UserModel.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();

    } catch (err) {
        console.log(err);
    }
};

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ message: 'All fields are required' });
        }
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect email or password' });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: 'Incorrect email or password' });
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next();
    } catch (err) {
        console.error(err);
    }
}