const express = require("express");
const Router = express.Router();
const restaurant = require("../models/Restaurants");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const config = require("config");
const keys = require("../config/keys");
const passport = require("passport");
const validateLoginInput = require("../validation/login");
const validateLoginInputRest = require("../validation/loginRest");
//Get ALl
Router.get("/", (req, res) => {
  restaurant
    .find()
    .then(data => res.json(data))
    .catch(err => res.send("error"));
});
//findOne
Router.get("/:_id", (req, res) => {
  const { _id } = req.params;
  restaurant
    .findOne({ _id })
    .then(data => res.json(data))
    .catch(err => res.send("error"));
});
//ajouter rest
Router.post("/", (req, res) => {
  const { name, specialite, img, address, password, mail } = req.body;
  const newRest = new restaurant({
    name,
    specialite,
    img,
    address,
    password,
    mail
  });
  // newRest
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      newRest.password = hash;
      newRest
        .save()
        .then(data => res.json(data))
        .catch(err => res.send("error"));
    });
  });
});
//delete rest
Router.delete("/:_id", (req, res) => {
  const { _id } = req.params;
  restaurant
    .findOneAndDelete({ _id })
    .then(data => res.send("success"))
    .catch(err => res.send("error"));
});
//modifier rest
Router.put("/:_id", (req, res) => {
  const { _id } = req.params;
  const { name, address, menu, specialite, img } = req.body;
  restaurant
    .findOneAndUpdate(
      { _id },
      { $set: { name, specialite, menu, address, img } }
    )
    .then(data => res.json(data))
    .catch(err => res.send("error"));
});
//------------LOGIN Restaurant----------------------
Router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInputRest(req.body);
  //Check validation
  // if (!isValid) {
  //   return res.status(400).json("mail or password is not valid");
  // }
  const mail = req.body.mail;
  const password = req.body.password;
  console.log(req.body);
  //Find user by mail
  restaurant.findOne({ mail }).then(restaurant => {
    //check for user
    if (!restaurant) {
      errors.mail = "Restaurant not found";
      return res.status(404).json(errors);
    }
    //Check Password
    console.log(password, restaurant.password);
    bcrypt.compare(password, restaurant.password).then(isMatch => {
      if (isMatch) {
        //User matched
        const payload = {
          id: restaurant.id,
          name: restaurant.name,
          mail: restaurant.mail
        }; //Create JWT payload
        //Sign Token
        jwt.sign(
          payload,
          keys.secretOrkey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json("password invalid");
      }
    });
  });
});
// verification
Router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.restaurant);
  }
);
module.exports = Router;