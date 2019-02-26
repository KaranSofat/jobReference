const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
var UserData = require('./../models/user.model');

passport.use(
    new localStrategy({ usernameField: 'username' },
        (username, password, done) => {
             UserData.where({email: username,password:password}).fetch().then(function(user) {

                if(user){
                    if(user.attributes.status == "inactive"){
                        return done(null, false, { message: 'Your account is Inactivate' });
                    }else{
                        return done(null, user);
                    }
                }else{
                    return done(null, false, { message: 'Invalid Credentials' });
                }      
             })
    
        })
);