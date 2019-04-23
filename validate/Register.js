const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateRegisterInput => {
    let errors = {};

    data.username = !isEmpty(data.name) ? data.name:'';
    data.password = !isEmpty(data.username) ? data.username:'';

    if(!Validator.isLength(data.username, {min: 2, max: 30})) {
        errors.username = 'Username does not meet requirements'
    };
    if(Validator.isEmpty(data.username)) {
        errors.username = 'Username is required'
    };
    if(!Validator.isLength(data.password, {min: 6, max:30})) {
        errors.password = "Password does not meet requirements"
    };
    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    };
    return {
        errors,
        isValid: isEmpty(errors)
    }
}