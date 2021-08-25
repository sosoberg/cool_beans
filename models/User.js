const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    id: {
        type: Number, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    username: {
        type: String,
        allowNull: false,
    },

    email: {
        type: String,
        allowNull: false,
        unique: true,
    },

    password: {
        type: String,
        allowNull: false,
    },
});

userSchema.methods = {
    checkPassword: function (inputPassword) {
        console.log(this.password)
        console.log(inputPassword)
        return bcrypt.compareSync(inputPassword, this.password)
    },

    hashPassword: plaingTextPassword => {
        return bcrypt.hashSync(plaingTextPassword, 10)
    }
}

userSchema.pre('save', function (next) {
    if (!this.password) {
        console.log('NO PASSWORD', this.password)
        next()
    } else {
        console.log('save');
        this.password = this.hashPassword(this.password)
        next()
    }
});

const User = mongoose.model('User', userSchema)

module.exports = User;

