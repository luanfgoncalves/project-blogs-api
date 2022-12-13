const { emailSchema } = require('./joiSchemas');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  // verifica se algum dado ficou faltando
  if (email === '' || password === '') {
 return res
    .status(400)
    .json({ message: 'Some required fields are missing' }); 
}
  // verifica dados inválidos
  const { error } = emailSchema.validate(req.body);
  if (error) {
 return res
    .status(400)
    .json({ message: 'Invalid fields' }); 
}

  return next();
};

module.exports = {
  loginValidation,
};