var connection = require('./../connection/conn');
const passport = require('passport');
var mailer = require('./mailer');
    exports.registerUser= function(req, res, next) {
    	var username = req.body.username
    	var email = req.body.email
    	var password = req.body.password
			var phoneNumber =  req.body.phoneNumber
			var created_timetamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    	var data = {
    		username:username,
    		email:email,
    		password:password,
				phone: phoneNumber,
				status:'inactive',
				created_timestamp: created_timetamp
    	}
    	connection('jobreference_users').insert(data)
      .then( function (result) {
      	var mailOptions = {
			  from: 'info@jboreference.com',
			  to: email,
			  subject: 'User Activation',
			  text: 'USer Activation mail'
		};
		mailer.sendMail(mailOptions, function(error, info){
			  if (error) {
			   res.send({ error: "error"}); 
			  } else {
			    res.send({ success: true, message: 'ok' }); 
			  }
		});
         
       }) .catch(function (e) {
				res.send({ error: e}); 
    });

    } 

exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user) => {    
        if (err) return res.status(400).json(err);
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        else return res.status(404).json({'error':'error'});
    })(req, res);
}     