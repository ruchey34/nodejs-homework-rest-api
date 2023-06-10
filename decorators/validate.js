const HttpError = require("../helpers/HttpError");

const validateBody = schema => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            next(HttpError(400, error.message));
        }
        next();
    }
}

const validateAddContact = async (req, res, next) => {
    try {
      const error = await contactsAddSchema.validate(req.body);
  
      if (error) {
        throw new HttpError(400, error.message);
      }
  
      next();
    } catch (err) {
      next(err);
    }
  };  

module.exports = validateBody, validateAddContact;