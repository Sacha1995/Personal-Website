import Joi from "joi";

// Define Joi schema for validation
export const schema = Joi.object({
  name: Joi.string().required().min(3).max(32).messages({
    "string.base": `Name should be a type of 'text'`,
    "string.min": `Name should have a minimum length of 3`,
    "string.max": `Name should have a maximum length of 32`,
    "string.empty": `Name is not allowed to be empty`,
    "string.required": `Name is not allowed to be empty`,
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .custom((value, helpers) => {
      const validTlds = ["com", "org", "net", "co.uk", "pro", "nl", "uk"];
      const domain = value.split("@")[1];
      const tld = domain.split(".").pop();
      if (!validTlds.includes(tld)) {
        return helpers.message("Invalid end of email");
      }
      return value;
    })
    .messages({
      "string.empty": `Email is not allowed to be empty`,
      "string.email": `Email must be a valid email`,
      "any.custom": `Invalid end of email`,
    }),
  subject: Joi.string().max(75).required().messages({
    "string.max": "Subject cannot exceed 75 characters",
    "string.empty": "Subject is not allowed to be empty",
  }),
  message: Joi.string().required(),
});

//validate Function
export const validate = async (formData) => {
  try {
    await schema.validateAsync(formData, { abortEarly: false });
    return {};
  } catch (err) {
    //if tests are unsuccessful send err obj to errObj func below
    console.log("validate", err);
    return errObj(err);
  }
};

//accepts err obj and maps over to create new obj with more user-friendly details
const errObj = (err) => {
  const errs = {};
  err.details.forEach((err) => {
    errs[err.context.key] = err.message;
  });
  return errs;
};
