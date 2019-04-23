const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = validateLoggedIn = (value) => {
    let errors = {}
    data.username = !isEmpty(data.username) ? data.username:''
    data.password = !isEmpty(data.password) ? data.password:''

    if(!Validator.isEmpty(data.username)) {
        errors.username = 'Username is invalid'
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required'
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}