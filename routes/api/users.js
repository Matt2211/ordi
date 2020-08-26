const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const key = require('../../config/keys').secret
const User = require('../../model/User')


/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
router.post('/register', (req,res) => {
    
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body
    if (password != confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        })
    }
    // Check for the unique Username
    User.findOne({
        username: username 
    }).then( user => {
        if(user){
            return res.status(400).json({
                msg: "Username already taken."
            })
        }
    })
    // Check for the unique Email
    User.findOne({
        email: email 
    }).then( user => {
        if(user){
            return res.status(400).json({
                msg: "Email is already in use."
            })
        }
    })
    // The data is valid and we can now register the user
    let newUser = new User({
        name,
        username,
        email,
        password
    })
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is now registered!"
                })
            })
        })
    })

})

module.exports = router;


/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post('/login', (req,res) => {
    User.findOne({ 
        username: req.body.username
    }).then( user => {
        if (!user) {
            return res.status(404).json({
                msg: "Username not found",
                success: false
            })
        }
        // Compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch){
                // Password is correct and we have to send the JSON token for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                // sign the token for the user
                jwt.sign( payload, key, { 
                    expiresIn: 604800 
                }, (err,token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: "You are now logged in"
                    })
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect Password.",
                    success: false
                })
            }
        })   
    })
})


/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req,res) => {
    return res.json({
        user: req.user
    })
})