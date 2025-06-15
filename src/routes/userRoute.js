const express = require('express');
const route = express.Router();
const userController = require('../controllers/userController');
const validate = require('../../middleWares/validations/validate');
const { userSignupSchema, userSigninSchema } = require('../../middleWares/validations/userValidation');

route.post('/signup', validate(userSignupSchema), userController.signup);
route.post('/signin', validate(userSigninSchema), userController.signin);
route.post('/purchase-course', userController.purchaseCourse);
route.get('/my-courses', userController.myCourses);

module.exports = route;