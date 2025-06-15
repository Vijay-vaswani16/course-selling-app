const express = require('express');
const userRepository = require('../repositories/userRepository');

const userController = {
    signup: {},
    signin: {},
    purchaseCourse: {},
    myCourses: {},
};


userController.signup = async (req, res) => {
    let {email, password} = req.body;
    const emailExists = await userRepository.checkDuplicateEmail(email);

    if(emailExists.length > 0) {
        res.json({
            message: 'This email already exists. Please Enter new email'
        })
    }
}

userController.signin = async (req, res) => {
    
}

userController.purchaseCourse = async (req, res) => {
    
}

userController.myCourses = async (req, res) => {
    
}


module.exports = userController;