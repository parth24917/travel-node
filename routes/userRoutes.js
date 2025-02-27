const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('User routes are working!');
});

router.post('/register', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        let user_exist = await User.findOne({ email: email });

        if (user_exist) {
            return res.status(400).json({
                success: false,
                msg: 'User already exists'
            });
        } else {
            const user = new User({ name, email, message });
            await user.save();
            res.status(201).send({
                success: true,
                user: user,
                message: "User Created Successfully"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: "Server error" });
    }
});

module.exports = router;
