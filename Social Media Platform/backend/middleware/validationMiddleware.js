const validateRegister = (
  req,
  res,
  next
) => {

  const {
    name,
    username,
    email,
    password
  } = req.body;

  if (
    !name ||
    !username ||
    !email ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message:
        "Password must be at least 6 characters"
    });
  }

  next();
};

module.exports = {
  validateRegister
};