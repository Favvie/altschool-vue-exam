import validator from "validator";

const validateRegisterInput = (data) => {
  let errors = {};

  const { username, email, password, password2 } = data;

  if (localStorage.users) {
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
    let userIndex = lsUsers.findIndex((user) => user.username === username);

    if (userIndex > -1) {
      errors.username = "Username is already in use";
    }
  }

  if (validator.isEmpty(username)) {
    // username validation
    errors.username = "Username field is required.";
  }

  // email validation
  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  // password validation
  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  if (!validator.equals(password, password2)) {
    errors.password2 = "Password should match!";
  }
 
  if (validator.isEmpty(password2)) {
    errors.password2 = "Confirm password field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateRegisterInput;
