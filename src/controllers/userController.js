const userRepository = require('../repositories/userRepository');
const commonResObj = require('../../middleWares/responses/commonResponse');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    signup: {},
    signin: {},
    purchaseCourse: {},
    myCourses: {},
};


userController.signup = async (req, res) => {
    
    try {

        let {name, email, password} = req.body;
        const emailExists = await userRepository.checkDuplicateEmail(email);

        if(emailExists) {
            commonResObj(res, 409, {message: 'This email already exists. Please Enter new email'});
            return;
        }

        let hashedPassword =await bcrypt.hash(password, 5);
        console.log('hashedPassword --> ', hashedPassword);

        let userSignup = await userRepository.insertUserDetails(name, email, hashedPassword);
        console.log('userSignup --> ', userSignup);

        if(!userSignup) {
            commonResObj(res, 500, {message: 'user not created'});
            return;
        }
        commonResObj(res, 200, {message: 'user successfully created'});

    } catch (error) {
        console.log(error);
        commonResObj(res, 500, { error: error });
        return;
    }
}

userController.signin = async (req, res) => {

    try {
        let {email, password} = req.body;
        let emailExists = await userRepository.checkDuplicateEmail(email);
        if(!emailExists) {
            commonResObj(res, 401, {message: 'Email not exists'});
            return;
        }

        let passwordChecker = await bcrypt.compare(password, emailExists?.password);
        console.log('passwordChecker --> ', passwordChecker);
        if(!passwordChecker) {
            commonResObj(res, 401, {message: 'Incorrect Password'});
            return;
        }

        let jwtToken = jwt.sign({
            email, password
        }, process.env.jwt_secret, { expiresIn: process.env.expiry_time });

        console.log('jwtToken --> ', jwtToken);

        commonResObj(res, 201, {
            token: jwtToken
        });
        return;
    } catch(error) {
        console.log(error);
        commonResObj(res, 500, {error: error});
        return;
    }
}

userController.purchaseCourse = async (req, res) => {
    try {
        
    } catch (error) {

    }
}

userController.myCourses = async (req, res) => {
    
}


module.exports = userController;