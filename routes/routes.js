module.exports = function(app, router) {
const auth = require('./../apis/auth.js');
app.post('/registerUser', auth.registerUser);
}