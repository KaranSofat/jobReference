var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var connection = require('./../../connection/connection');
var UserData = connection.Model.extend({
    tableName: 'jobreference_users' , 
        generateJwt:function () {
        return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: '5m'
    })

        }    
});

module.exports = connection.model('User', UserData);
