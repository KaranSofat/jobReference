var connection = require('./../connection/connection');
var mailer = require('./mailer');
    exports.registerUser= function(req, res, next) {
    	var username = req.body.username
    	var email = req.body.email
    	var password = req.body.password
    	var phoneNumber =  req.body.phoneNumber

    	var data = {
    		username:username,
    		email:email,
    		password:password,
    		phone: phoneNumber
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
        
        
    });

    }  