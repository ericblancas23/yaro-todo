const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jwt');
const keys = require('../config/keys');

const validateRegisterInput = require('../validate/Register');
const validateLoginInput = require('../validate/Login');

const User = require('../models/User');

router.get('/test', (req, res) => {
    res.json({msg: 'users works'})
});

//register route
router.post('/register', (req,res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    User.findOne({username: req.body.username}).then(user => {
        if(user) {
            errors.username = 'username already exists';
            return res.status(400).json(errors);
        } else {
            res.body.username;
        }

        const newUser = new User({
            username:req.body.username,
            password:req.body.password
        });
        bcrypt.genSalt(10,(err, salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash) => {
                if(err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    });
});

//forgot password
// router.post('/forgotpassword', (req,res) => {

// })