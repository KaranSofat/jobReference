const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
var UserData = require('./../models/user.model');

passport.use(
    new localStrategy({ usernameField: 'username' },
        (username, password, done) => {
             UserData.where({username: username,password:password}).fetch().then(function(user) {
                console.log(user)
                    if (!user)
                        return done(null, false, { message: 'Invalid Credentials' });
                   
                    else
                        return done(null, user);
             })
    
        })
);