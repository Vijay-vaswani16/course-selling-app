const { z } = require('zod');

const adminSignupSchema = z.object({
  username: z.string().min(3, "Username is required and must be of atleast 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  role: z.enum(["admin", "superadmin"], "Invalid role"),
});

const adminSigninSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(8, "Password is required"),
});

module.exports = { adminSignupSchema, adminSigninSchema };
