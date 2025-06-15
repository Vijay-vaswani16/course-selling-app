const express = require('express');
const Route = express.Router();
const userController = require('../controllers/userController');

Route.post('/signup', userController.signup);
Route.post('/signin', userController.signin);
Route.post('/purchase-course', userController.purchaseCourse);
Route.get('/', userController.myCourses);

module.exports = Route;