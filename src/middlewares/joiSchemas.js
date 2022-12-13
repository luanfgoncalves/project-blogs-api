const Joi = require('joi');

const emailSchema = Joi.object({
  email: Joi.string().email().required(), // string type
  password: Joi.string().min(6).required(), // tam minimo
});

// Req 4
const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(), // tam min 8
  email: Joi.string().email().required(), // req email
  password: Joi.string().alphanum().min(6).required(), // letras e numeros min 6 chars
  image: Joi.string(),
});

module.exports = {
  emailSchema,
  userSchema,
};

// https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation
