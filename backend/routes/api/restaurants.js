// const express = require("express");
// const jwt = require("jsonwebtoken");
// const Router = express.Router();
// const bcrypt = require("bcryptjs");
// const keys = require("../../Config/keys");
// const passport = require("passport");
// const Restaurants = require("../../Models/Restaurants");
// const validateLoginInput = require("../../validation/login");
// //@route  GET api/restaurants/test
// //@desc   Tests restaurants route
// //@access Public
// // router.get("/test", (req, res) => res.json(req.body));
// Router.get("/test", (req, res) => {
//   const errors = {};
//   return Restaurants.find()
//     .then(restaurants => {
//       if (!users) {
//         errors.noProfile = "There are no restaurant yet";
//         return res.status(404).json(errors);
//       }
//       res.json(restaurants);
//     })
//     .catch(err => {
//       res.status(404).json({ restaurants: "There are no restau yet" });
//     });
// });
// Router.delete("/:_id", (req, res) => {
//   const { _id } = req.params;
//   Restaurant.findOneAndDelete({ _id })
//     .then(data => res.send("success"))
//     .catch(err => res.send("error"));
// });
// // ----------------Sign Up-------------------------
// Router.post("/register", (req, res) => {
//   const { name, address, specialite, img, password, mail } = req.body;
//   const newRestaurant = new Restaurant({
//     name,
//     address,
//     specialite,
//     img,
//     password,
//     mail
//   });
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//       newRestaurant.password = hash;
//       newRestaurant
//         .save()
//         .then(user => res.json(newRestaurant))
//         .catch(err => res.send("error"));
//     });
//   });
// });
// //----------------------------------------------------------
// // ----------------Sign IN----------------------------------
// Router.post("/login", (req, res) => {
//   const { errors } = validateLoginInput(req.body);
//   const email = req.body.email;
//   const password = req.body.password;
//   console.log(req.body);
//   //Find restaurant by email
//   Restaurant.findOne({ email }).then(restaurants => {
//     //check for user
//     if (!restaurants) {
//       errors.email = "User not found";
//       return res.status(404).json(errors);
//     }
//     //Check Password
//     bcrypt.compare(password, restaurants.password).then(isMatch => {
//       if (isMatch) {
//         //Restaurant matched
//         const payload = {
//           id: restaurants.id,
//           name: restaurants.name,
//           email: restaurants.email
//         }; //Create JWT payload
//         //Sign Token
//         jwt.sign(
//           payload,
//           keys.secretOrkey,
//           { expiresIn: 3600 },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         errors.password = "Password incorrect";
//         return res.status(400).json("password invalid");
//       }
//     });
//   });
// });
// // verification
// Router.get(
//   "/current",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     res.json(req.restaurants);
//   }
// );
// module.exports = Router;