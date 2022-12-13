const { userSchema } = require('./joiSchemas');

const userValidation = (req, res, next) => {
const { error } = userSchema.validate(req.body);
if (error) return res.status(400).json({ message: error.message });

  return next();
};

module.exports = {
  userValidation,
};
