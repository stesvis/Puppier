import Joi from "joi-browser";

export function validate(data, schema) {
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

export function validateField(name, value, schema) {
  const obj = { [name]: value };
  const fieldSchema = Joi.object({ [name]: schema[name] });
  const { error } = fieldSchema.validate(obj);

  if (!error) {
    return null;
  }

  return error.details[0].message;
}
