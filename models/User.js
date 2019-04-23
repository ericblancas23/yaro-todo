const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = Users = mongoose.model('users', userSchema);