import validator from "validator";

const validateLoginInput = (data) => {
  let errors = {};

  const { username, password } = data;

  // username validation
  if (validator.isEmpty(username)) {
    errors.username = "Username field is required.";
  }

  // password validation
  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateLoginInput;
