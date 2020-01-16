
const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const auth = require('../config/passport');



router.get('/current', auth, async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user._id }).select('-password');
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });