const Joi = require('joi');

const emailSchema = Joi.object({
  email: Joi.string().email().required(), // string type
  password: Joi.string().min(6).required(), // tam minimo
});

module.exports = {
  emailSchema,
};

// https://www.digitalocean.com/community/tutorials/how-to-use-joi-for-node-api-schema-validation
