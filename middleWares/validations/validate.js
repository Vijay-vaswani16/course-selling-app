// middleware/validate.js
const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors });
    }
    req.validatedData = result.data; // optional: use validated data directly
    next();
};
  
module.exports = validate;