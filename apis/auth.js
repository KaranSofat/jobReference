var connection = require('./../connection/conn');
const passport = require('passport');
var mailer = require('./mailer');
var badRequest = 400;

exports.checkEmail = function(email, callback) {

    var emailData = {
        email: email
    }
    var emailCheck;
    connection('jobreference_users').where(emailData).then(function(result) {
        if (result.length) {
            emailCheck = false
        } else {
            emailCheck = true;
        }
        callback(emailCheck)
    })

}
var userId;
exports.registerUser = function(req, res, next) {
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password
    var phoneNumber = req.body.phoneNumber
    var created_timetamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    var data = {
        username: username,
        email: email,
        password: password,
        phone: phoneNumber,
        status: 'inactive',
        created_timestamp: created_timetamp
    }
    var checkEmail = exports.checkEmail(email, function(response) {
        if (response == false) {
					res.status(badRequest);
            res.send({
                error: 'email already exists'
            })
        } else {
            connection('jobreference_users').insert(data)
                .then(function(result) {
                    userId = result[0]
                    var mailOptions = {
                        from: 'info@jboreference.com',
                        to: email,
                        subject: 'User Activation',
                        text: 'Please Click the below Url to activate Account http://localhost:5555/activate/'+result[0]
                    };
                    mailer.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            res.send({
                                error: "error"
                            });
                        } else {
                            res.send({
                                success: true,
                                message: 'ok'
                            });
                        }
                    });

                }).catch(function(e) {
									res.status(badRequest);
                    res.send({
                        error: e
                    });
                });
        }

    });
}

exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user,message) => {
        if (user) return res.status(200).json({
            "token": user.generateJwt()
        });
        else return res.status(400).json({error:message.message})
    })(req, res);
}

exports.activateUser = function(req, res, next) {
	var id = req.param('id')
	connection('jobreference_users').where({id:id})
	.update({status:'active'})
	.then(function(result) {
		res.send({success: true})
	}).catch(function(e) {
		res.send({
			error: e
		});
	})

}	
exports.getStates = function(req, res, next) {
	connection('states')
	.then(function(result) {
		res.send({states: result})
	}).catch(function(e) {
		res.send({
			error: e
		});
	})

}

exports.getEducations = function(req, res, next) {
	connection('education')
	.then(function(result) {
		res.send({education: result})
	}).catch(function(e) {
		res.send({
			error: e
		});
	})

}

exports.getUserDetails = function(req, res, next) {
    res.send("success")
	/*var id =  req.id
	connection('jobreference_users').where({id:id})
	.then(function(result) {
		res.send({user: result})
	}).catch(function(e) {
		res.send({
			error: e
		});
	})*/

}