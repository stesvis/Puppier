import Joi from "joi-browser";

function validate(data, schema) {
  const options = { abortEarly: false };
  const result = Joi.validate(data, schema, options);

  if (!result.error) {
    return null;
  }

  const errors = {};

  result.error.details.map((details) => {
    if (!errors[details.path[0]]) {
      errors[details.path[0]] = details.message;
    }
    return null;
  });

  return errors;
}

function validateField(name, value, schema) {
  const obj = { [name]: value };

  // validate only the elements that have a schema
  if (!schema[name]) {
    return null;
  }

  const fieldSchema = Joi.object({ [name]: schema[name] });
  const { error } = fieldSchema.validate(obj);

  if (!error) {
    return null;
  }

  return error.details[0].message;
}

export default {
  validate,
  validateField,
};
