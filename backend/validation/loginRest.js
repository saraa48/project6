const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateLoginInputRest(data) {
  let errors = {};
  data.mail = !isEmpty(data.mail) ? data.mail : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  //   if (Validator.isEmpty(data.password)) {
  //     errors.password = "Password field is requiredd";
  //   }
  //   if (Validator.isEmpty(data.mail)) {
  //     errors.mail = "mail field is required";
  //   }
  //   if (!Validator.isEmail(data.mail)) {
  //     errors.mail = "mail is invalid";
  //   }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};