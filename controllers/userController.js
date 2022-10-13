const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
        });
        res.status(201).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        console.log(err);
        res.json({
            status: 'error',
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        const correct = await bcrypt.compare(password, user.password);
        if (!user || !correct) {
            return res.status(401).json({
                status: 'error',
                message: '帳號密碼錯誤！',
            });
        }
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        res.json({
            status: 'success',
            token,
            data: {
                user,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(401).json({
            status: 'error',
        });
    }
};
