const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/Users");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

// @route POST api/users/login
// @desc Login user and set cookie
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 }, // 1 year in seconds
          (err, token) => {
            res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
            res.json({ success: true, user: { id: user.id, name: user.name } });
          }
        );
      } else {
        return res.status(400).json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

// @route POST api/users/logout
// @desc Logout user and clear cookie
// @access Public
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// @route GET api/users/check-auth
// @desc Check if user is authenticated
// @access Private
router.get("/check-auth", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({
    isAuthenticated: true,
    user: {
      id: req.user.id,
      name: req.user.name
    }
  });
});

module.exports = router;