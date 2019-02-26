module.exports = function(app, router) {
const auth = require('./../apis/auth.js');
const jwtHelper = require('./../apis/config/jwtHelper');
app.post('/registerUser', auth.registerUser);
app.post('/authenticate', auth.authenticate);
app.get('/activateUser/:id', auth.authenticate);
app.get('/userProfile', jwtHelper.verifyJwtToken, auth.getUserDetails);
}