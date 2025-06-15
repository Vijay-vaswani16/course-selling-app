const express = require('express');
const commonResObj = require("../../middleWares/responses/commonResponse");
let {admin, course, user} = require('../models/db');

const userRepository = {
    checkDuplicateEmail: {},
    insertUserDetails: {},
}

userRepository.checkDuplicateEmail = async (email) => {
    let emailChecker = await user.findOne({email: email});
    console.log(emailChecker);
    return emailChecker;
}

userRepository.insertUserDetails = async (name, email, password) => {
    let userDetails = await user.create({name, email, password});
    return userDetails;
}

module.exports = userRepository;